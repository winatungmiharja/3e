import * as React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

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

export default function InputPassword({
  id,
  label,
  onChange,
  type,
  helperText,
  error = null,
  placeholder = '',
  ...rest
}: InputProps) {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-normal text-gray-700'>
        {label}
      </label>

      {show ? (
        <div className='relative'>
          <input
            className='w-full px-4 py-2 border-0 rounded-lg focus:ring-2 focus:ring-primary-500'
            {...rest}
            type='text'
            id='username'
            name={id}
            placeholder={placeholder}
            aria-describedby={id}
            onChange={(e) => onChange(e)}
          />
          <AiOutlineEye
            size={25}
            className='absolute -translate-y-1/2 top-1/2 right-4'
            onClick={() => setShow(false)}
          />{' '}
        </div>
      ) : (
        <div className='relative'>
          <input
            className='w-full px-4 py-2 border-0 rounded-lg focus:ring-2 focus:ring-primary-500'
            {...rest}
            type={type}
            id='username'
            name={id}
            placeholder={placeholder}
            aria-describedby={id}
            onChange={(e) => onChange(e)}
          />
          <AiOutlineEyeInvisible
            size={25}
            className='absolute -translate-y-1/2 top-1/2 right-4'
            onClick={() => setShow(true)}
          />{' '}
        </div>
      )}

      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {error && <span className='text-xs text-red-500'>{error}</span>}
      </div>
    </div>
  );
}
