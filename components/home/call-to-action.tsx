import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Understand Your Pet?
        </h2>
        <p className="text-xl mb-8">
          Try EmotiPaw today and strengthen your bond with your furry friend.
        </p>
        <Link
          href="/demo"
          className="bg-white text-primary px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-100 transition-colors duration-300"
        >
          Start Now
        </Link>
      </div>
    </section>
  );
}
