/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import * as React from 'react';

import { sessionAdmin, sessionUser } from '@/lib/fetch';

import useAdminAuth from '@/store/authAdmin';
import useUserAuth from '@/store/authUser';
import { saveUserToken } from '@/store/localSession';

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preload, setPreload] = React.useState(true);
  const router = useRouter();
  const userStore = useUserAuth();
  const adminStore = useAdminAuth();
  const path = router.pathname;

  const checkUserSession = async (token: string) => {
    const resData = await sessionUser(token);
    if (resData.isSuccess) {
      const newData = resData.data.data;
      saveUserToken(resData.data.data.id_session_user);
      userStore.setSessionUser(newData);
      setPreload(false);
      return true;
    } else {
      return false;
    }
  };

  const checkAdminSession = async (token: string) => {
    const resData = await sessionAdmin(token);
    if (resData.isSuccess) {
      const newData = resData.data.data;
      saveUserToken(resData.data.data.id_session_admin);
      adminStore.setSessionAdmin(newData);
      setPreload(false);
      return true;
    } else {
      return false;
    }
  };

  const checkAuthentication = async (local: string | null) => {
    if (local === null) redirectToLogin();
    else {
      const isAdmin = await checkAdminSession(JSON.parse(local));
      const isUser = await checkUserSession(JSON.parse(local));

      if (path.includes('/admin')) {
        isAdmin ? setPreload(false) : redirectToLogin();
      } else if (path.includes('/user')) {
        isUser ? setPreload(false) : redirectToLogin();
      } else {
        if (isAdmin) router.push('/admin/home');
        else if (isUser) router.push('/user/home');
        else setPreload(false);
      }
    }
  };

  const redirectToLogin = () => {
    router.push('/login');
  };

  React.useEffect(() => {
    const saved = localStorage.getItem('user_token');

    if (
      saved === null &&
      !(path.includes('/admin') || path.includes('/user'))
    ) {
      setPreload(false);
    } else {
      checkAuthentication(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {preload ? (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
          <img src='/images/loading.gif' className='w-16' alt='loading' />
          <h1>Loading ...</h1>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
