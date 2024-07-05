import Image from 'next/image';

interface Expert {
  name: string;
  title: string;
  description: string;
  image: string;
}

const experts: Expert[] = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Veterinary Specialist',
    description:
      "Dr. Johnson ensures our AI accurately interprets pet health indicators, integrating vital medical knowledge to provide insights that support your pet's overall well-being.",
    image: '/images/experts/expert-vet.png',
  },
  {
    name: 'Prof. Michael Rosenthal',
    title: 'Animal Behavior Expert',
    description:
      "Prof. Rosenthal's research in canine and feline psychology helps EmotiPaw understand subtle cues, allowing you to better comprehend your furry friends' emotional states and needs.",
    image: '/images/experts/expert-behaviorist.png',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Certified Dog Trainer',
    description:
      "Emma's practical experience in dog training enhances our AI's ability to recognize and interpret various dog behaviors, helping you foster a stronger bond with your pet.",
    image: '/images/experts/expert-trainer.png',
  },
];

export default function Experts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Designed & Guided by Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {expert.name}
              </h3>
              <p className="text-xl text-primary mb-3">{expert.title}</p>
              <p className="text-gray-600 leading-relaxed">
                {expert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
