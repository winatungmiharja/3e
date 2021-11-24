/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';
import * as React from 'react';
import { CgMenuRound } from 'react-icons/cg';
import { IoMdLogIn } from 'react-icons/io';

import Button from '@/components/button/Button';

import { useToggle } from '../provider/context';

type TopNavigationProps = {
  isLogin?: boolean;
  isRegister?: boolean;
  isLogout?: boolean;
  isAdmin?: boolean;
  isUser?: boolean;
} & React.ComponentPropsWithoutRef<'header'>;

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

export default function TopNavigation({
  isLogin,
  isRegister,
  isLogout,
  isAdmin,
  isUser,
  ...rest
}: TopNavigationProps) {
  const toggleRef = useToggle();
  return (
    <header className='relative z-10 items-center h-20' {...rest}>
      <div className='relative z-10 flex flex-col justify-center h-full px-2 sm:px-4 flex-center'>
        <div className='relative flex items-center justify-between layout'>
          {isLogout && (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Button dotted={false} onClick={() => toggleRef.toggle()}>
              <CgMenuRound size={25} />
            </Button>
          )}
          <div
            className={clsx('flex items-center gap-4', {
              'ml-auto': isLogout,
            })}
          >
            <img src='/favicon/logo3e.png' alt='logo' className='w-10' />
            <p className='whitespace-nowrap'>
              English Equality <br />
              for everyone
            </p>
          </div>

          <div className='hidden sm:block'>
            <div className='flex justify-end gap-4 ml-auto '>
              {isLogin && (
                <Link href='/login' passHref={true}>
                  <div>
                    <Button
                      variants='primary'
                      icon={NavigationState.login.icon}
                    >
                      {NavigationState.login.title}
                    </Button>
                  </div>
                </Link>
              )}
              {isRegister && (
                <Link href='/register' passHref={true}>
                  <div>
                    <Button
                      variants='secondary'
                      icon={NavigationState.register.icon}
                    >
                      {NavigationState.register.title}
                    </Button>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div className='block sm:hidden'>
            <div className='text-right'>
              {!isLogout && (
                <Menu as='div' className='relative inline-block text-left'>
                  {({ open }) => (
                    <>
                      <Menu.Button as='div'>
                        <Button dotted={false}>
                          <CgMenuRound size={25} />
                        </Button>
                      </Menu.Button>
                      {open && (
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-xl ring-black ring-opacity-5 focus:outline-none'>
                            <div className='p-1 border-2 border-dashed shadow-lg rounded-xl border-primary-500'>
                              {isLogin && (
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? 'bg-primary-600 text-white'
                                          : 'text-gray-900'
                                      } group flex gap-2 rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                      {active
                                        ? NavigationState.login.icon
                                        : NavigationState.login.icon}
                                      {NavigationState.login.title}
                                    </button>
                                  )}
                                </Menu.Item>
                              )}
                              {isRegister && (
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? 'bg-primary-600 text-white'
                                          : 'text-gray-900'
                                      } group flex gap-2 rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                      {active
                                        ? NavigationState.register.icon
                                        : NavigationState.register.icon}
                                      {NavigationState.register.title}
                                    </button>
                                  )}
                                </Menu.Item>
                              )}
                            </div>
                          </Menu.Items>
                        </Transition>
                      )}
                    </>
                  )}
                </Menu>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
