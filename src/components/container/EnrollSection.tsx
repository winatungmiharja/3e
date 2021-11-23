/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { IoMdLogIn } from 'react-icons/io';

import Button from '@/components/button/Button';

const NavigationState = {
  login: {
    title: 'Log In',
    icon: <IoMdLogIn size={20} />,
  },
  register: {
    title: 'Register',
    icon: <IoMdLogIn size={20} />,
  },
  logout: {
    title: 'Log Out',
    icon: <IoMdLogIn size={20} />,
  },
};
export default function EnrollSection() {
  return (
    <section id='enroll'>
      <div className='flex items-center justify-center p-4 py-16 bg-fixed bg-center bg-no-repeat bg-cover bg-2 bg-origin-border sm:min-h-main'>
        <div className='w-full max-w-3xl p-2 bg-primary-100 rounded-3xl'>
          <div className='flex flex-col-reverse w-full max-w-3xl gap-4 border-2 border-dashed shadow-2xl sm:flex-row border-primary-500 bg-primary-100 rounded-3xl'>
            <img
              src='/images/person_03.svg'
              alt='person holding book and glass'
              className='relative bottom-0 hidden max-w-xs pt-6 mt-auto -left-6 sm:w-full sm:block'
            />
            <div className='flex flex-col items-start justify-center p-6 sm:px-8 sm:py-16 sm:pl-0'>
              <img
                src='/images/person_03.svg'
                alt=''
                className='block w-1/2 pb-4 mx-auto sm:hidden'
              />
              <h1>Daftar Sekarang</h1>
              <p>Tunggu apa lagi?</p>
              <p>daftar sekarang dan dapatkan pengecekan toefl gratis!</p>

              <Button
                variants='primary'
                className='mt-6'
                icon={NavigationState.login.icon}
              >
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
