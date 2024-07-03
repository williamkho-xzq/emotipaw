import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EmotiPaw</h3>
            <p className="mb-4">Understanding pet emotions through AI</p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-accent">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-accent">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-accent">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="hover:text-accent">
                  Try Demo
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">
              Stay updated with our latest features and news
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 EmotiPaw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
