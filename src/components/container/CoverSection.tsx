/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Button from '@/components/button/Button';

export default function CoverSection() {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className='bg-fixed bg-no-repeat bg-cover bg-1'>
      <div className='grid h-full grid-cols-1 sm:grid-cols-2 min-h-main layout'>
        <div className='flex flex-col items-start justify-center h-full'>
          <div className='p-4 sm:p-0'>
            <h1 className='text-5xl md:text-7xl'>3E</h1>
            <h1 className='text-3xl md:text-4xl'>
              English Equality <br />
              for Everyone❤
            </h1>

            <Button
              onClick={scrollToEnroll}
              className='mt-4 text-xl md:text-2xl'
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className='flex items-end justify-center h-full'>
          <img
            src='/images/person-01.svg'
            alt=''
            className='w-full max-w-sm sm:max-w-none'
          />
        </div>
      </div>
    </section>
  );
}