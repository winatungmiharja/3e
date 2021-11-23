import * as React from 'react';

import DashboardProvider from './provider/context';
import Overlay from './provider/overlay';
import TopNavigation from './topnavigation';

const style = {
  container: `h-screen overflow-hidden relative`,
  mainContainer: `flex flex-col h-screen w-full`,
  main: `h-screen overflow-auto`,
};
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className='flex items-start'>
          <Overlay />
          <div className={style.mainContainer}>
            <TopNavigation isLogin={true} isRegister={true} />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
