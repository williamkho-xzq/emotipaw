import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero min-h-screen relative">
      <Image
        src="/happy-pet.jpg"
        alt="Happy pet"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        priority
      />
      <div className="hero-overlay bg-opacity-60 z-10"></div>
      <div className="hero-content text-center text-neutral-content relative z-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Understand Your Pet's Emotions
          </h1>
          <p className="mb-5">
            EmotiPaw uses AI to decode your pet's feelings, helping you build a
            stronger bond.
          </p>
          <Link href="/demo" className="btn btn-primary">
            Try Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
