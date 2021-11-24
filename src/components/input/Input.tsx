import * as React from 'react';

export type InputProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly?: boolean;
  error?: null | string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  label,
  onChange,
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
        className='w-full px-4 py-2 border-0 rounded-lg focus:ring-2 focus:ring-primary-500'
        {...rest}
        type={type}
        id='username'
        name={id}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {error && <span className='text-xs text-red-500'>{error}</span>}
      </div>
    </div>
  );
}
