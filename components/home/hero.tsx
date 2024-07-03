import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/happy-pet.jpg"
        alt="Happy pet"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
          Understand Your Pet's Emotions
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
          EmotiPaw uses AI to decode your pet's feelings, helping you build a
          stronger bond.
        </p>
        <Link
          href="/demo"
          className="bg-white text-primary px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-100 transition-colors duration-300 animate-fade-in"
        >
          Try Demo
        </Link>
      </div>
    </section>
  );
}
