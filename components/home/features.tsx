import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Analysis',
    description:
      "Experience the future of pet care with our cutting-edge AI technology. EmotiPaw's advanced algorithms analyze subtle facial expressions, body language, and vocalizations to accurately interpret your pet's emotions. Gain unprecedented insights into your furry friend's mental state and needs.",
    image: '/images/features/ai-analysis.png',
  },
  {
    title: 'Easy to Use',
    description:
      "Unlock the power of pet emotion recognition with just a few taps. Our user-friendly app makes it effortless to capture moments, receive instant analysis, and track your pet's emotional well-being over time. No technical expertise required – just point, click, and connect with your pet like never before.",
    image: '/images/features/easy-to-use.png',
  },
  {
    title: 'Instant Results',
    description:
      "Say goodbye to guesswork and hello to immediate understanding. EmotiPaw delivers real-time emotion analysis, providing you with instant insights into your pet's feelings. Whether you're at home or away, stay connected to your pet's emotional state and respond to their needs promptly.",
    image: '/images/features/instant-results.png',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Understand Your Pet Like Never Before
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={150}
                  height={150}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
