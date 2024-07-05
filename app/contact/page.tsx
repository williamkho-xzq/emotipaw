import ContactForm from '@/components/contact/contact-form';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="md:w-1/2 bg-primary p-12 text-black">
              <h2 className="text-4xl font-bold mb-6">Let's Connect!</h2>
              <p className="text-xl mb-8">
                We'd love to hear from you! Whether you have questions about
                EmotiPaw, want to share your experience, or just want to say
                hello, we're here to listen.
              </p>
              <div className="mb-8">
                <p className="mb-2">
                  <strong>Email:</strong> hello@emotipaw.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-black hover:text-gray-200 text-2xl"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-200 text-2xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-200 text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-black hover:text-gray-200 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="md:w-1/2 p-12">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
