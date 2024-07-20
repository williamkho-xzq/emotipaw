import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Emily Sullivan',
    role: 'Founder & CEO',
    image: '/images/team/emily-sullivan.jpg',
  },
  {
    name: 'Alexander Thompson',
    role: 'CTO',
    image: '/images/team/alexander-thompson.jpg',
  },
  {
    name: 'Alice Johnson',
    role: 'Lead AI Developer',
    image: '/images/team/alice-johnson.jpg',
  },
  {
    name: 'Mike Lee',
    role: 'UX/UI Designer',
    image: '/images/team/mike-lee.jpg',
  },
  {
    name: 'Nur Aisyah',
    role: 'Data Scientist',
    image: '/images/team/nur-aisyah.jpg',
  },
  {
    name: 'Thabo Okonkwo',
    role: 'Mobile App Developer',
    image: '/images/team/thabo-okonkwo.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Backend Engineer',
    image: '/images/team/emily-rodriguez.jpg',
  },
  {
    name: 'Arjun Sharma',
    role: 'Machine Learning Engineer',
    image: '/images/team/arjun-sharma.jpg',
  },
  {
    name: 'Soo-Yun Park',
    role: 'Frontend Developer',
    image: '/images/team/soo-yun-park.jpg',
  },
];

export default function TeamMembers() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
