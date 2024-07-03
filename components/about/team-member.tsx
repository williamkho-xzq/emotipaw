import { TeamMember } from '@/types';

interface TeamMemberProps {
  member: TeamMember;
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-gray-600 mb-3">{member.role}</p>
      <p>{member.bio}</p>
    </div>
  );
}
