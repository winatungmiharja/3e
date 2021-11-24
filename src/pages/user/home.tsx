import * as React from 'react';

import Layout from '@/components/layout/LandingLayout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Layout>
        <Seo templateTitle='Home' />

        <main>
          <section className=''>
            <div className='min-h-screen py-20 layout'></div>
          </section>
        </main>
      </Layout>
    </>
  );
}
