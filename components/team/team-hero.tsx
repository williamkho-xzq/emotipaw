import Image from 'next/image';

export default function TeamHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center">
      <Image
        src="/images/pets-background.jpg"
        alt="Pets"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Enhancing the Human-Animal Bond
        </h1>
        <p className="text-xl md:text-2xl">
          At EmotiPaw, our mission is to deepen the connection between pets and
          their humans. By leveraging cutting-edge technology, we're improving
          understanding of pet emotions, leading to happier pets and more
          fulfilling relationships. Join us in creating a world where every tail
          wag and purr is understood.
        </p>
      </div>
    </div>
  );
}
