/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import CoverSection from '@/components/container/CoverSection';
import EnrollSection from '@/components/container/EnrollSection';
import IntroduceSection from '@/components/container/IntroduceSection';
import WhySection from '@/components/container/WhySection';
import LandingLayout from '@/components/layout/LandingLayout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <LandingLayout>
      <Seo />
      <main>
        <CoverSection />
        <IntroduceSection />
        <WhySection />
        <EnrollSection />
      </main>
    </LandingLayout>
  );
}
