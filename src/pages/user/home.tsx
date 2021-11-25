/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/LandingLayout';
import Seo from '@/components/Seo';

import useUserAuth from '@/store/authUser';

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
              <div className='flex flex-col-reverse items-center justify-center gap-4 md:flex-row'>
                <div className='flex items-end justify-end w-full h-full md:justify-center md:min-h-main'>
                  <img
                    src='/images/person_03.svg'
                    alt='person learning languages'
                    className='hidden w-40 max-w-sm md:w-full -scale-x-1 md:block md:scale-x-100 md:max-w-md'
                  />
                </div>
                <div className='flex flex-col justify-center w-full py-4 md:py-16 '>
                  <h2>Halo {data.nama}</h2>
                  <p>
                    Selamat datang di{' '}
                    <span className='px-2 text-white rounded-full whitespace-nowrap bg-primary-500'>
                      English for Everyone
                    </span>
                  </p>
                  <hr className='my-4 border-primary-200' />

                  <div className='max-w-lg p-1 rounded-3xl bg-primary-500'>
                    <div className='px-4 py-5 text-white border-2 border-white border-dashed rounded-3xl'>
                      <h2>Profil Kamu</h2>
                      <hr />
                      <div className='grid grid-cols-2 gap-4 mt-4'>
                        <p>NRP</p>
                        <p className='font-bold'>{data.nrp}</p>
                        <p>Nama</p>
                        <p className='font-bold'>{data.nama}</p>
                        <p>Departemen</p>
                        <p className='font-bold'>{data.departemen}</p>
                        <p>no.Hp</p>
                        <p className='font-bold'>{data.hp}</p>
                      </div>
                    </div>
                  </div>
                  <hr className='my-4 border-primary-200' />
                  <div>
                    <h4 className='mb-4'>Apa yang ingin kamu lakukan?</h4>
                    <p className='text-gray-500 '>
                      Cek Nilai Tefl kamu{' '}
                      <Link href='/user/tefl' passHref={true}>
                        <span className='font-medium text-primary-500 bg-red hover:underline hover:cursor-pointer'>
                          disini
                        </span>
                      </Link>
                    </p>
                    <p className='mt-4 text-xs text-gray-500 '>
                      atau akses menu lewat sidebar
                    </p>
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
