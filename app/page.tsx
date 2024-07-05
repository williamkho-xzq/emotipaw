import Hero from '@/components/home/hero';
import MediaCoverage from '@/components/home/media-coverage';
import Features from '@/components/home/features';
import HowItWorks from '@/components/home/how-it-works';
import CallToAction from '@/components/home/call-to-action';
import Experts from '@/components/home/experts';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Experts />
      <MediaCoverage />
      <CallToAction />
    </main>
  );
}
