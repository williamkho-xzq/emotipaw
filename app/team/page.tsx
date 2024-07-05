import TeamHero from '@/components/team/team-hero';
import Experts from '@/components/team/experts';
import TeamMembers from '@/components/team/team-members';

export default function TeamPage() {
  return (
    <div>
      <TeamHero />
      <Experts />
      <TeamMembers />
    </div>
  );
}
