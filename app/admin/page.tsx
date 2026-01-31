"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface UploadedVideo {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

interface UploadState {
  isDragging: boolean;
  isUploading: boolean;
  progress: number;
  error: string | null;
  success: string | null;
}

export default function AdminUploadPage() {
  const [uploadState, setUploadState] = useState<UploadState>({
    isDragging: false,
    isUploading: false,
    progress: 0,
    error: null,
    success: null,
  });
  const [videos, setVideos] = useState<UploadedVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    const maxSize = 50 * 1024 * 1024;
    const allowedTypes = ["video/mp4", "video/webm", "video/quicktime"];
    const allowedExtensions = [".mp4", ".webm", ".mov"];

    const extension = "." + file.name.split(".").pop()?.toLowerCase();

    if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(extension)) {
      return "Invalid file type. Please upload mp4, webm, or mov files.";
    }

    if (file.size > maxSize) {
      return `File too large. Maximum size is 50MB. Your file is ${(file.size / 1024 / 1024).toFixed(2)}MB.`;
    }

    return null;
  };

  const handleUpload = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setUploadState((prev) => ({ ...prev, error: validationError, success: null }));
      return;
    }

    setUploadState((prev) => ({
      ...prev,
      isUploading: true,
      progress: 0,
      error: null,
      success: null,
    }));

    try {
      const formData = new FormData();
      formData.append("file", file);

      const progressInterval = setInterval(() => {
        setUploadState((prev) => ({
          ...prev,
          progress: Math.min(prev.progress + 10, 90),
        }));
      }, 200);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Upload failed");
      }

      const data = await response.json();

      setUploadState((prev) => ({
        ...prev,
        isUploading: false,
        progress: 100,
        success: "Video uploaded successfully!",
      }));

      setVideos((prev) => [data, ...prev]);

      setTimeout(() => {
        setUploadState((prev) => ({ ...prev, progress: 0 }));
      }, 2000);
    } catch (error) {
      setUploadState((prev) => ({
        ...prev,
        isUploading: false,
        progress: 0,
        error: error instanceof Error ? error.message : "Upload failed",
      }));
    }
  };

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadState((prev) => ({ ...prev, isDragging: true }));
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadState((prev) => ({ ...prev, isDragging: false }));
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadState((prev) => ({ ...prev, isDragging: false }));

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleUpload(files[0]);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleUpload(files[0]);
    }
  };

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/upload");
      if (response.ok) {
        const data = await response.json();
        setVideos(data.videos);
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (url: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    try {
      const response = await fetch("/api/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        setVideos((prev) => prev.filter((v) => v.url !== url));
      }
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setUploadState((prev) => ({ ...prev, success: "URL copied to clipboard!" }));
    setTimeout(() => {
      setUploadState((prev) => ({ ...prev, success: null }));
    }, 2000);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <section className="bg-[var(--hinton-dark)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Upload</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Upload videos for use as background content across the website
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`
              border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer
              ${uploadState.isDragging
                ? "border-[var(--hinton-accent)] bg-[var(--hinton-accent)]/10"
                : "border-gray-300 hover:border-[var(--hinton)]"
              }
              ${uploadState.isUploading ? "pointer-events-none opacity-60" : ""}
            `}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".mp4,.webm,.mov,video/mp4,video/webm,video/quicktime"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto text-gray-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>

              <div>
                <p className="text-lg font-semibold text-[var(--hinton-dark)]">
                  {uploadState.isDragging
                    ? "Drop your video here"
                    : "Drag and drop your video here"}
                </p>
                <p className="text-gray-500 mt-1">or click to browse</p>
              </div>

              <p className="text-sm text-gray-400">
                Supported formats: MP4, WebM, MOV (max 50MB)
              </p>
            </div>
          </div>

          {uploadState.isUploading && (
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Uploading...</span>
                <span>{uploadState.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[var(--hinton-accent)] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadState.progress}%` }}
                />
              </div>
            </div>
          )}

          {uploadState.error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {uploadState.error}
            </div>
          )}

          {uploadState.success && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
              {uploadState.success}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-8">
            Uploaded Videos
          </h2>

          {isLoading ? (
            <div className="text-center py-12 text-gray-500">Loading videos...</div>
          ) : videos.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No videos uploaded yet
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.url}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="aspect-video bg-black">
                    <video
                      src={video.url}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 truncate mb-2">
                      {video.pathname.split("/").pop()}
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      {(video.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => copyToClipboard(video.url)}
                        className="flex-1 px-3 py-2 bg-[var(--hinton-dark)] text-white text-sm rounded hover:bg-[var(--hinton)] transition-colors"
                      >
                        Copy URL
                      </button>
                      <button
                        onClick={() => handleDelete(video.url)}
                        className="px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
