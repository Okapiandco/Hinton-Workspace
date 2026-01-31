import { put, del, list } from '@vercel/blob';
import { NextResponse } from 'next/server';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ALLOWED_TYPES = ['video/mp4', 'video/webm', 'video/quicktime'];
const ALLOWED_EXTENSIONS = ['.mp4', '.webm', '.mov'];

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!ALLOWED_TYPES.includes(file.type) && !ALLOWED_EXTENSIONS.includes(fileExtension)) {
      return NextResponse.json(
        { error: 'Invalid file type. Allowed: mp4, webm, mov' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Maximum size: 50MB' },
        { status: 400 }
      );
    }

    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `videos/${timestamp}-${sanitizedName}`;

    const blob = await put(filename, file, {
      access: 'public',
      addRandomSuffix: false,
    });

    return NextResponse.json({
      url: blob.url,
      pathname: blob.pathname,
      size: file.size,
      uploadedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const { blobs } = await list({ prefix: 'videos/' });

    const videos = blobs.map((blob) => ({
      url: blob.url,
      pathname: blob.pathname,
      size: blob.size,
      uploadedAt: blob.uploadedAt,
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error('List error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request): Promise<NextResponse> {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'No URL provided' },
        { status: 400 }
      );
    }

    await del(url);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete video' },
      { status: 500 }
    );
  }
}
