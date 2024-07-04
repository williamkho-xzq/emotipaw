import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
          Ready to Understand Your Pet?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Try EmotiPaw today and strengthen your bond with your furry friend.
        </p>
        <Link
          href="/demo"
          className="bg-white text-primary-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-primary-50 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
        >
          Start Now
        </Link>
      </div>
    </section>
  );
}
