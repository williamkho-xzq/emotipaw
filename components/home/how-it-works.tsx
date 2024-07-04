import Image from 'next/image';
import { FaUpload, FaMagic, FaChartBar } from 'react-icons/fa';

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const steps: Step[] = [
  {
    title: 'Capture the Moment',
    description: `Simply take a clear photo of your pet using your smartphone or upload an existing one. It's quick, easy, and the first step to understanding your furry friend better.`,
    icon: FaUpload,
    image: '/images/pet-photo-upload.jpg',
  },
  {
    title: 'AI Magic at Work',
    description: `Our advanced AI, trained on thousands of pet images, analyzes your photo in seconds. It detects subtle facial cues and body language to determine your pet's emotional state.`,
    icon: FaMagic,
    image: '/images/ai-analysis.jpg',
  },
  {
    title: 'Unlock Pet Insights',
    description: `Receive a comprehensive report on your pet's emotions. Understand if they're happy, anxious, or in discomfort, allowing you to provide better care and strengthen your bond.`,
    icon: FaChartBar,
    image: '/images/pet-emotion-results.jpg',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-600">
          Decode Your Pet&apos;s Emotions in 3 Easy Steps
        </h2>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div
                className={`md:w-1/2 flex justify-center items-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}
              >
                <div className="w-64 h-64 relative">
                  <Image
                    src={step.image}
                    alt={step.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </div>
              <div
                className={`md:w-1/2 mt-6 md:mt-0 ${index % 2 !== 0 ? 'md:order-1 md:pr-12' : 'md:pl-12'}`}
              >
                <div className="flex items-center mb-3">
                  <step.icon className="text-2xl text-primary-500 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-600">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
