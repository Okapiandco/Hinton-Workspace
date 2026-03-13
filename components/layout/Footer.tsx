import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Hinton Workspace</h3>
            <p className="font-sans text-sm text-gray-300 mb-4">
              Flexible workspace in North Dorset where ideas come to life.
            </p>
            <div className="flex gap-4">
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
            <ul className="space-y-2 font-sans text-sm">
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
                <Link href="/events" className="hover:text-pink transition-colors">
                  Events & Workshops
                </Link>
              </li>
              <li>
                <Link href="/workspace/sitting-room" className="hover:text-pink transition-colors">
                  The Sitting Room
                </Link>
              </li>
              <li>
                <Link href="/wellbeing" className="hover:text-pink transition-colors">
                  Wellbeing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-bold mb-4">Company</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <Link href="/about-us" className="hover:text-pink transition-colors">
                  About Us
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
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">Visit Us</h4>
            <address className="font-sans text-sm text-gray-300 not-italic space-y-2">
              <p>
                Hinton Workspace, The Building Yard<br />
                Hinton St Mary, Sturminster Newton<br />
                DT10 1NA
              </p>
              <p>
                <a href="tel:01258472623" className="hover:text-pink transition-colors">
                  01258 472623
                </a>
              </p>
              <p>
                <a href="mailto:reception@hintonworkspace.co.uk" className="hover:text-pink transition-colors">
                  reception@hintonworkspace.co.uk
                </a>
              </p>
            </address>
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
