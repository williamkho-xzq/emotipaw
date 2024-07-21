import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center">
      <Image
        src="/images/cat-hero.jpg"
        alt="Pets"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Pet's Inner World
        </h1>
        <p className="text-xl md:text-2xl">
          Our AI decodes your furry friend's emotions in seconds
        </p>
      </div>
    </div>
  );
}
