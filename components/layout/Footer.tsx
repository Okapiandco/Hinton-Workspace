import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <Image
              src="/Website Images 2026/Logos/HINTON_WORKSPACE_LOGO_GREEN_RGB.png"
              alt="Hinton Workspace"
              width={140}
              height={44}
              className="brightness-0 invert mb-4 mx-auto md:mx-0"
            />
            <p className="font-sans text-sm text-gray-300 mb-6">
              Flexible workspace in North Dorset where ideas come to life.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/hintonworkspace"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/hintonworkspace"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/hintonworkspace"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* The Workspace */}
          <div>
            <h4 className="font-serif font-bold mb-4">The Workspace</h4>
            <ul className="space-y-2 font-sans text-sm text-gray-300">
              <li>
                <Link href="/workspace/coworking" className="hover:text-pink transition-colors">
                  Coworking
                </Link>
              </li>
              <li>
                <Link href="/workspace/meeting-rooms" className="hover:text-pink transition-colors">
                  Meeting Rooms
                </Link>
              </li>
              <li>
                <Link href="/whats-on" className="hover:text-pink transition-colors">
                  What&apos;s On
                </Link>
              </li>
              <li>
                <Link href="/workspace/flexible-office" className="hover:text-pink transition-colors">
                  Flexible Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-bold mb-4">Company</h4>
            <ul className="space-y-2 font-sans text-sm text-gray-300">
              <li>
                <Link href="/about-us" className="hover:text-pink transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/wellbeing" className="hover:text-pink transition-colors">
                  Wellbeing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-pink transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-pink transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Press */}
          <div>
            <h4 className="font-serif font-bold mb-4">Press</h4>
            <ul className="space-y-2 font-sans text-sm text-gray-300">
              <li>
                <Link href="/press" className="hover:text-pink transition-colors">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-bold mb-4">Legal</h4>
            <ul className="space-y-2 font-sans text-sm text-gray-300">
              <li>
                <Link href="/legal/privacy" className="hover:text-pink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-pink transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-pink transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center font-sans text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hinton Workspace. All rights reserved.</p>
            <p>Part of the Hinton St Mary Estate</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
