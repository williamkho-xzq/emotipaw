import Hero from '@/components/try-it-out/hero';
import TryItOutPage from '@/components/try-it-out/try-it-out-page';
import { Suspense } from 'react';

export default function TryItOut() {
  return (
    <div>
      <Hero />
      <Suspense>
        <TryItOutPage />
      </Suspense>
    </div>
  );
}
