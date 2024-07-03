import Hero from '@/components/home/hero';
import Features from '@/components/home/features';
import HowItWorks from '@/components/home/how-it-works';
import Testimonials from '@/components/home/testimonials';
import CallToAction from '@/components/home/call-to-action';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
