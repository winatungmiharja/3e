import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner5 } from 'react-icons/im';

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  variants?: 'primary' | 'secondary';
  dotted?: boolean;
  icon?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  disabled,
  isLoading,
  className,
  variants = 'primary',
  dotted = true,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={isLoading || disabled}
      className={clsx(
        'flex-shrink-0 inline-block p-0.5 font-semibold rounded-full',
        'focus:outline-none focus:ring focus:ring-primary-100',
        'disabled:cursor-not-allowed',
        {
          'bg-primary-600 border-2 border-primary-600 hover:bg-primary-500 hover:border-primary-500 text-white':
            variants === 'primary',
          'bg-white border-2 border-primary-600 hover:bg-primary-100 text-black':
            variants === 'secondary',
        },
        {
          'relative !text-transparent hover:text-transparent !cursor-wait transition-none':
            isLoading,
        },
        className
      )}
      style={{}}
    >
      {dotted ? (
        <div
          className={clsx('px-6 py-1 border-2 border-dotted rounded-full', {
            'border-white ': variants === 'primary',
            'border-primary-500 ': variants === 'secondary',
          })}
        >
          {isLoading && (
            <div className='absolute text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
              <ImSpinner5 className='animate-spin' />
            </div>
          )}
          <div className='flex items-center justify-center gap-2'>
            {children}
            {icon ?? ''}
          </div>
        </div>
      ) : (
        <div className={clsx('p-1 rounded-full')}>
          {isLoading && (
            <div className='absolute text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
              <ImSpinner5 className='animate-spin' size={25} />
            </div>
          )}
          <div className='flex items-center justify-center gap-2'>
            {children}
            {icon ?? ''}
          </div>
        </div>
      )}
    </button>
  );
}
