/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function WhySection() {
  return (
    <section className='bg-primary-500'>
      <div className='pt-0 pb-16 sm:pt-16 sm:pb-32 layout'>
        <h1 className='text-white'>Why us?</h1>
        <dl className='grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3'>
          <div className='p-1 overflow-hidden bg-white shadow-lg rounded-2xl '>
            <div className='h-full px-4 py-5 border-2 border-dashed rounded-2xl border-primary-500 sm:p-4'>
              <img
                loading='lazy'
                src='/images/person-06.svg'
                alt=''
                className='mx-auto max-h-40'
              />
              <p className='text-sm font-medium text-gray-500 truncate'>
                Lakukan pembelajaran secara
              </p>
              <h2 className='mt-1 text-3xl font-semibold text-gray-900'>
                Mandiri
              </h2>
            </div>
          </div>

          <div className='p-1 overflow-hidden bg-white shadow-lg rounded-2xl '>
            <div className='h-full px-4 py-5 border-2 border-dashed rounded-2xl border-primary-500 sm:p-4'>
              <img
                loading='lazy'
                src='/images/person-05.svg'
                alt=''
                className='mx-auto max-h-40'
              />
              <p className='text-sm font-medium text-gray-500 truncate'>
                Tes Tefl kamu secara
              </p>
              <h2 className='mt-1 text-3xl font-semibold text-gray-900'>
                Berkala
              </h2>
            </div>
          </div>
          <div className='p-1 overflow-hidden bg-white shadow-lg rounded-2xl '>
            <div className='h-full px-4 py-5 border-2 border-dashed rounded-2xl border-primary-500 sm:p-4'>
              <img
                loading='lazy'
                src='/images/person-04.svg'
                alt=''
                className='mx-auto max-h-40'
              />
              <p className='text-sm font-medium text-gray-500 truncate'>
                Akses yang mudah secara
              </p>
              <h2 className='mt-1 text-3xl font-semibold text-gray-900'>
                Online
              </h2>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
}
