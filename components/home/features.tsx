import { IconType } from 'react-icons';
import { FaRobot, FaUpload, FaBolt, FaPaw } from 'react-icons/fa';

interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced algorithms to interpret pet emotions',
    icon: FaRobot,
  },
  {
    title: 'Easy to Use',
    description: 'Simply upload a photo of your pet to get started',
    icon: FaUpload,
  },
  {
    title: 'Instant Results',
    description: 'Receive emotion analysis in seconds',
    icon: FaBolt,
  },
  {
    title: 'Multiple Pet Types',
    description: 'Works with dogs, cats, and more',
    icon: FaPaw,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-600 font-display">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary-500 mb-4">
                <feature.icon className="text-5xl mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
