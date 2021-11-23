/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

export default function IntroduceSection() {
  return (
    <section className='py-16 bg-primary-500 '>
      <div className='grid h-full grid-cols-1 lg:grid-cols-2 min-h-main layout'>
        <div className='flex items-end justify-center h-full'>
          <img
            src='/images/person_02.svg'
            alt='kids learning'
            className='w-full max-w-sm sm:max-w-none'
          />
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='flex flex-col gap-2 p-4 text-white sm:p-16'>
            <h1>Welcome to class!</h1>
            <h3 className='flex items-center gap-4'>
              <HiOutlineQuestionMarkCircle />
              Apa itu 3e?
            </h3>
            <blockquote className='ml-10'>
              3E atau English Equality for Everyone adalah sebuah project dari
              kelompok 3 yang memanfaatkan sebaran data nilai TEFL mahasiswa ITS
              untuk meningkatkan kemampuan bahasa inggris di masa yang akan
              datang
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
