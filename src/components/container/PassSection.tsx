/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';

import useUserAuth from '@/store/authUser';

import Button from '../button/Button';
export default function PassSection({ isPass }: { isPass: boolean }) {
  const store = useUserAuth();
  const user = store.user.nama;

  return (
    <>
      {isPass ? (
        <div className='relative pb-28'>
          <h3>Selamat, {user}</h3>
          <hr className='my-2' />
          <p className='text-sm'>
            Nilai Tefl kamu sudah diatas nilai rata-rata
          </p>
          <p className='text-sm'>Tetap Pertahankan ya!✨</p>
          <img
            src='/images/person_05.svg'
            alt='person succeed'
            className='absolute max-w-xs -bottom-10 -right-8'
          />
        </div>
      ) : (
        <div className='relative pb-20'>
          <h3>Yah, nilai Tefl kamu kurang :( !</h3>
          <hr className='my-2' />
          <p className='text-sm'>Nilai Tefl kamu kurang dari nilai rata-rata</p>
          <p className='text-sm'>Yuk belajar sekarang!✨</p>
          <Link href='https://bahasa.its.ac.id/' passHref={true}>
            <div>
              <Button variants='secondary' className='mt-3'>
                Belajar Sekarang
              </Button>
            </div>
          </Link>
          <img
            src='/images/person_06.svg'
            alt='person succeed'
            className='absolute max-w-xs -bottom-10 -right-8'
          />
        </div>
      )}
    </>
  );
}
