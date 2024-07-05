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
    description: 'Expert in pet health and well-being',
    image: '/images/experts/expert-vet.png',
  },
  {
    name: 'Prof. Michael Rosenthal',
    title: 'Animal Behavior Expert',
    description: 'Specialist in dog and cat psychology',
    image: '/images/experts/expert-behaviorist.png',
  },
  {
    name: 'Emma Rodriguez',
    title: 'Certified Pet Trainer',
    description: 'Expert in dog and cat training techniques',
    image: '/images/experts/expert-trainer.png',
  },
  {
    name: 'Dr. Lisa Park',
    title: 'Feline Behavior Specialist',
    description: 'Expert in cat body language and communication',
    image: '/images/experts/expert-cat-specialist.jpg',
  },
  {
    name: 'John Davis',
    title: 'Canine Communication Expert',
    description: 'Specialist in understanding dog emotions',
    image: '/images/experts/expert-dog-specialist.jpg',
  },
  {
    name: 'Dr. Maria Garcia',
    title: 'Animal Welfare Scientist',
    description: 'Expert in improving pet quality of life',
    image: '/images/experts/expert-welfare.jpg',
  },
  {
    name: 'Dr. Alex Turner',
    title: 'Veterinary Neurologist',
    description: 'Specialist in pet brain function and emotions',
    image: '/images/experts/expert-neurologist.jpg',
  },
  {
    name: 'Samantha Lee',
    title: 'Pet Nutrition Specialist',
    description: "Expert in diet's impact on pet behavior",
    image: '/images/experts/expert-nutritionist.jpg',
  },
  {
    name: 'Dr. Robert Brown',
    title: 'Animal Cognition Researcher',
    description: 'Specialist in pet learning and memory',
    image: '/images/experts/expert-cognition.jpg',
  },
];

export default function Experts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Expert Advisors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
              <p className="text-primary font-medium mb-2">{expert.title}</p>
              <p className="text-gray-600">{expert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
