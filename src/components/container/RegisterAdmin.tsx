/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { registerAdmin } from '@/lib/fetch';
import { RegisterAdminType } from '@/lib/type';
import { validateName, validatePassword } from '@/lib/validation';

import useAdminAuth from '@/store/authAdmin';
import { saveAdminToken } from '@/store/localSession';

import Button from '../button/Button';
import Input from '../input/Input';
import InputPassword from '../input/InputPassword';

export default function RegisterAdmin() {
  const store = useAdminAuth();
  const router = useRouter();
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<RegisterAdminType>({
    nip: '',
    nama: '',
    password: '',
  });
  const updateUser = (params: keyof RegisterAdminType, value: string) => {
    setUser((prevState) => ({ ...prevState, [params]: value }));
  };

  function validateAll(): boolean {
    return !!(
      validatePassword(user.password) &&
      validateName(user.nama) &&
      user.nip
    );
  }

  const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setError(null);
    setLoading(true);
    e.preventDefault();
    const resData = await registerAdmin(user);
    if (resData.isSuccess) {
      const userId = resData.data.data.id_admin;
      store.setRegisterAdmin(user, userId);
      saveAdminToken(resData.data.data.id_session_admin);
      router.push('/admin/home');
    } else {
      setError(resData.message);
      setLoading(false);
    }
  };

  return (
    <div className='border-2 border-dashed shadow-lg border-primary-500 bg-primary-100 rounded-b-3xl'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center'>
          <img
            src='/images/person_08.svg'
            alt=''
            className='block h-full rounded-3xl'
          />
        </div>
        <div className='p-6'>
          <h3>Daftar Sebagai Admin</h3>
          <form>
            <div className='flex flex-col gap-4 my-4'>
              <Input
                type='number'
                id={'register-nip'}
                label={'NIP'}
                onChange={(e) => updateUser('nip', e.target.value)}
              />
              <Input
                type='text'
                id={'register-nama'}
                label={'Nama'}
                error={
                  !validateName(user.nama) && user.nama.length > 0
                    ? 'Nama setidaknya terdiri atas 3 karakter'
                    : ''
                }
                onChange={(e) => updateUser('nama', e.target.value)}
              />
              <InputPassword
                type='password'
                id={'password-pass'}
                label={'Password'}
                error={
                  !validatePassword(user.password) && user.password.length > 0
                    ? 'Password belum lengkap'
                    : ''
                }
                helperText='password harus terdiri atas 8 karakter dengan gabungan huruf kapital dan huruf kecil'
                onChange={(e) => updateUser('password', e.target.value)}
              />
              <Button
                isLoading={loading}
                disabled={!validateAll()}
                variants='primary'
                onClick={(e) => submit(e)}
              >
                Register
              </Button>
              <div>
                {error && (
                  <p className='px-4 py-2 text-xs text-red-500 bg-white rounded-lg'>
                    {error}
                  </p>
                )}
              </div>
              <p className='text-sm text-center text-gray-500'>
                sudah punya akun?{' '}
                <Link href='/login' passHref={true}>
                  <span className='font-medium text-primary-500 bg-red hover:underline hover:cursor-pointer'>
                    login
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
