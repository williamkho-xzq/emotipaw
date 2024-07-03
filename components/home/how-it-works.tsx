import { IconType } from 'react-icons';
import { FaUpload, FaMagic, FaChartBar } from 'react-icons/fa';

interface Step {
  title: string;
  description: string;
  icon: IconType;
}

const steps: Step[] = [
  {
    title: 'Upload Photo',
    description: 'Take or upload a clear photo of your pet',
    icon: FaUpload,
  },
  {
    title: 'AI Analysis',
    description: 'Our AI processes the image to detect emotions',
    icon: FaMagic,
  },
  {
    title: 'Get Results',
    description: "Receive a detailed report of your pet's emotional state",
    icon: FaChartBar,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-around items-start">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center mb-8 md:mb-0 w-full md:w-1/3"
            >
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
