import clsx from 'clsx';
import * as React from 'react';

import DashboardProvider from './provider/context';
import Overlay from './provider/overlay';
import SideNavigation from './sidenavigation/index';
import TopNavigation from './topnavigation';
import RequireAuth from '../RequireAuth';

const style = {
  container: `h-screen overflow-hidden relative`,
  main: `h-screen overflow-auto`,
};
export default function LandingLayout({
  children,
  isLogin,
  isRegister,
  isLogout,
  isAdmin,
  isUser,
}: {
  children: React.ReactNode;
  isLogin?: boolean;
  isRegister?: boolean;
  isLogout?: boolean;
  isAdmin?: boolean;
  isUser?: boolean;
}) {
  return (
    <DashboardProvider>
      <RequireAuth>
        <div className={style.container}>
          <div className='flex items-start'>
            {isLogout && (
              <>
                <Overlay />
                <SideNavigation
                  mobilePosition='right'
                  isAdmin={isAdmin}
                  isUser={isUser}
                />
              </>
            )}

            <div
              className={clsx(
                'absolute top-0 bottom-0 left-0 right-0 flex flex-col w-full h-screen ',
                {
                  'lg:pl-24': isLogout,
                }
              )}
            >
              <TopNavigation
                isAdmin={isAdmin}
                isUser={isUser}
                isLogin={isLogin}
                isRegister={isRegister}
                isLogout={isLogout}
              />
              <main className={style.main}>{children}</main>
            </div>
          </div>
        </div>
      </RequireAuth>
    </DashboardProvider>
  );
}
