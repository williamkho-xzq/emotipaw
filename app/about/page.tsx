import TeamMember from '@/components/about/team-member';
import { TeamMember as TeamMemberType } from '@/types';

const teamMembers: TeamMemberType[] = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    bio: 'Jane has a background in veterinary science and computer vision.',
  },
  {
    name: 'John Smith',
    role: 'CTO',
    bio: 'John is an AI researcher with a focus on animal behavior.',
  },
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    bio: 'Alice has been developing AI applications for over a decade.',
  },
];

const advisors: TeamMemberType[] = [
  {
    name: 'Dr. Emily Brown',
    role: 'Veterinary Advisor',
    bio: 'Dr. Brown is a leading expert in animal psychology.',
  },
  {
    name: 'Prof. Michael Lee',
    role: 'AI Ethics Advisor',
    bio: 'Prof. Lee specializes in ethical considerations in AI applications.',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About EmotiPaw</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At EmotiPaw, we're passionate about strengthening the bond between
          pets and their owners. Our mission is to leverage cutting-edge AI
          technology to help pet owners better understand their furry friends'
          emotional states, leading to happier pets and more fulfilling
          relationships.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Advisors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {advisors.map((advisor) => (
            <TeamMember key={advisor.name} member={advisor} />
          ))}
        </div>
      </section>
    </div>
  );
}
