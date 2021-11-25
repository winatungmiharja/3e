/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { loginAdmin } from '@/lib/fetch';
import { LoginAdminType } from '@/lib/type';
import { validatePassword } from '@/lib/validation';

import { saveAdminToken } from '@/store/localSession';

import Button from '../button/Button';
import Input from '../input/Input';
import InputPassword from '../input/InputPassword';

export default function LoginAdmin() {
  const router = useRouter();
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<LoginAdminType>({
    nip: '',
    password: '',
  });
  const updateUser = (params: keyof LoginAdminType, value: string) => {
    setUser((prevState) => ({ ...prevState, [params]: value }));
  };

  function validateAll(): boolean {
    return !!(validatePassword(user.password) && user.nip);
  }

  const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setError(null);
    setLoading(true);
    e.preventDefault();
    const resData = await loginAdmin(user);
    if (resData.isSuccess) {
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
            src='/images/person_04.svg'
            alt=''
            className='block h-full rounded-3xl'
          />
        </div>
        <div className='p-6'>
          <p>Sudah memiliki akun?</p>
          <h3>Masuk Sebagai Admin</h3>
          <form>
            <div className='flex flex-col gap-4 my-4'>
              <Input
                type='number'
                id={'register-nip'}
                label={'NIP'}
                onChange={(e) => updateUser('nip', e.target.value)}
              />
              <InputPassword
                type='password'
                id={'password-pass'}
                label={'Password'}
                onChange={(e) => updateUser('password', e.target.value)}
              />
              <Button
                isLoading={loading}
                disabled={!validateAll()}
                variants='primary'
                onClick={(e) => submit(e)}
              >
                Login
              </Button>
              <div>
                {error && (
                  <p className='px-4 py-2 text-xs text-red-500 bg-white rounded-lg'>
                    {error}
                  </p>
                )}
              </div>
              <p className='text-sm text-center text-gray-500'>
                belum punya akun?{' '}
                <Link href='/register' passHref={true}>
                  <span className='font-medium text-primary-500 bg-red hover:underline hover:cursor-pointer'>
                    register
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
