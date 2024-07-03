import Hero from '@/components/home/hero';
import Features from '@/components/home/features';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import CallToAction from '@/components/home/call-to-action';

export default async function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
