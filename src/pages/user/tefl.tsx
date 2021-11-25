/* eslint-disable @next/next/no-img-element */

import * as React from 'react';

import TeflHistorySection from '../../components/container/TeflHistorySection';
import TeflInputSection from '../../components/container/TeflInputSection';
import Layout from '../../components/layout/LandingLayout';
import Seo from '../../components/Seo';
import useUserAuth from '../../store/authUser';

export default function HomePage() {
  const store = useUserAuth();
  const data = store.user;

  return (
    <>
      <Layout isLogout={true} isUser={true}>
        <Seo templateTitle='Home' />
        <main>
          <section>
            <div className='md:min-h-main layout'>
              <div className='flex flex-col items-center justify-center gap-4 md:flex-row-reverse'>
                <div className='flex items-end justify-end w-full h-full md:justify-center md:min-h-main'>
                  <img
                    src='/images/person_01.svg'
                    alt='person learning languages'
                    className='hidden w-40 max-w-sm md:w-full -scale-x-1 md:block md:scale-x-100 md:max-w-md'
                  />
                </div>
                <div className='flex flex-col justify-center w-full py-4 md:py-16 '>
                  <h2>Halo {data.nama}</h2>
                  <p>
                    lakukan Pengecekan nilai Tefl mu dengan mengisi{' '}
                    <span className='px-2 text-white rounded-full whitespace-nowrap bg-primary-500'>
                      form berikut
                    </span>
                  </p>
                  <hr className='my-4 border-primary-200' />

                  <TeflInputSection />

                  <hr className='my-4 border-primary-200' />
                  <div>
                    <h4 className='mb-4'>Pengecekan Terakhir</h4>
                    <TeflHistorySection />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
