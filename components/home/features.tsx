import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Analysis',
    description:
      "Experience the future of pet care with our cutting-edge AI technology. EmotiPaw's advanced algorithms analyze subtle facial expressions, body language, and vocalizations to accurately interpret your pet's emotions.",
  },
  {
    title: 'Easy to Use',
    description:
      "Unlock the power of pet emotion recognition with just a few taps. Our user-friendly app makes it effortless to capture moments, receive instant analysis, and track your pet's emotional well-being over time.",
  },
  {
    title: 'Instant Results',
    description:
      "Say goodbye to guesswork and hello to immediate understanding. EmotiPaw delivers real-time emotion analysis, providing you with instant insights into your pet's feelings.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Understand Your Pet Like Never Before
            </h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-md shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex items-center">
            <div className="relative w-full h-0 pb-[75%] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/pet-features.jpg"
                alt="Pet using EmotiPaw"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
