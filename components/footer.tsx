export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">EmotiPaw</h3>
            <p>Understanding pet emotions through AI</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="/demo" className="hover:text-blue-300">
                  Try Demo
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <p>Follow us on social media for the latest updates</p>
            {/* Add social media icons/links here */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 EmotiPaw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
