import clsx from 'clsx';
import * as React from 'react';

export type InputProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  className?: string;
  errorClassName?: string;
  readOnly?: boolean;
  error?: null | string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  label,
  onChange,
  className,
  errorClassName,
  type,
  helperText,
  error = null,
  placeholder = '',
  ...rest
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-normal text-gray-700'>
        {label}
      </label>

      <input
        className={clsx(
          'w-full px-4 py-2 border-0 rounded-lg focus:ring-2 focus:ring-primary-500',
          className
        )}
        {...rest}
        type={type}
        id='username'
        name={id}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {error && (
          <span className={clsx('text-xs text-red-500', errorClassName)}>
            {error}
          </span>
        )}
      </div>
    </div>
  );
}
