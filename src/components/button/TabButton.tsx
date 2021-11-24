import clsx from 'clsx';
import * as React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  left: boolean;
  right: boolean;
  variants?: 'primary' | 'secondary';
} & React.ComponentPropsWithoutRef<'button'>;

export default function TabButton({
  children,
  className,
  left = false,
  right = false,
  variants = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex-shrink-0 inline-block p-0.5 font-semibold ',
        'focus:outline-none focus:ring focus:ring-primary-100',
        'disabled:cursor-not-allowed',
        {
          'bg-primary-600 border-2 border-primary-600 hover:bg-primary-500 hover:border-primary-500 text-white':
            variants === 'primary',
          'bg-primary-200 border-2 border-primary-600 hover:bg-primary-100 text-black':
            variants === 'secondary',
        },
        {
          'rounded-l-2xl': left,
        },
        {
          'rounded-r-2xl': right,
        },

        className
      )}
    >
      <div className={clsx('p-1 rounded-full')}>
        <div className='flex items-center justify-center gap-2'>{children}</div>
      </div>
    </button>
  );
}
