import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-blue-50">
      <h1 className="text-5xl font-bold mb-4">
        Understand Your Pet's Emotions
      </h1>
      <p className="text-xl mb-8">
        EmotiPaw uses AI to decode your pet's feelings, helping you build a
        stronger bond.
      </p>
      <Link
        href="/demo"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Try Demo
      </Link>
    </section>
  );
}
