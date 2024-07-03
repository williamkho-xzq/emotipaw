import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h2 className="text-3xl font-bold mb-4">Ready to Understand Your Pet?</h2>
      <p className="text-xl mb-8">
        Try EmotiPaw today and strengthen your bond with your furry friend.
      </p>
      <Link
        href="/demo"
        className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
      >
        Start Now
      </Link>
    </section>
  );
}
