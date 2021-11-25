/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import * as React from 'react';

import { deleteUserToken } from '../store/localSession';

export default function LogOutPage() {
  const router = useRouter();

  React.useEffect(() => {
    deleteUserToken();
    router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <img src='/images/loading.gif' className='w-16' alt='loading' />
      <h1>Loading ...</h1>
    </div>
  );
}
