import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-12 bg-blue-600">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0">
          Ready to understand your pet better?
        </h2>
        <Link
          href="/try-it-out"
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors duration-300 shadow-lg"
        >
          Try EmotiPaw Now
        </Link>
      </div>
    </section>
  );
}
