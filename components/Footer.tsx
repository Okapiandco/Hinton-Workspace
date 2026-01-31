import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--hinton-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links:</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="hover:text-[var(--hinton-accent)]">
                Privacy Policy
              </Link>
              <Link href="/blog" className="hover:text-[var(--hinton-accent)]">
                Blog
              </Link>
              <Link href="/events" className="hover:text-[var(--hinton-accent)]">
                Events
              </Link>
              <Link href="/contact" className="hover:text-[var(--hinton-accent)]">
                Contact
              </Link>
            </div>
          </div>

          {/* Logo and CTA */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 relative mb-4">
              <Image
                src="/logo-icon-white.png"
                alt="Hinton Workspace"
                fill
                className="object-contain"
              />
            </div>
            <a
              href="https://hintonworkspace.spacebring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--hinton-accent)] text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-[#c99d87] transition-colors tracking-wider"
            >
              BOOK NOW
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-right md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Us:</h3>
            <address className="not-italic">
              <p>The Hinton Workspace</p>
              <p>The Building Yard</p>
              <p>Hinton St Mary</p>
              <p>Sturminster Newton</p>
              <p>DT10 1NA</p>
              <p className="mt-4">
                <a href="tel:01258472623" className="hover:text-[var(--hinton-accent)]">
                  01258 472 623
                </a>
              </p>
              <p>
                <a href="mailto:reception@hintonworkspace.co.uk" className="hover:text-[var(--hinton-accent)]">
                  reception@hintonworkspace.co.uk
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>© Hinton Workspace {new Date().getFullYear()}</p>
          <p className="mt-1">Copyright Hinton St Mary Estate | Powered by We are Chain Ltd</p>
        </div>
      </div>
    </footer>
  );
}
