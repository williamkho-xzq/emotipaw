import ContactForm from '@/components/contact/contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8">
        Have questions or feedback? We'd love to hear from you. Fill out the
        form below, and we'll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
