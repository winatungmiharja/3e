import { Transition } from '@headlessui/react';
import * as React from 'react';

import { fetchUserHistory, postTeflData } from '@/lib/fetch';
import { TeflType } from '@/lib/type';
import { validateTefl } from '@/lib/validation';

import useUserAuth, { UserTeflType } from '@/store/authUser';

import PassSection from './PassSection';
import Button from '../button/Button';
import Input from '../input/Input';

export default function TeflInputSection() {
  const store = useUserAuth();
  const id = store.user.id;

  const [error, setError] = React.useState<null | string>(null);
  const [pass, setPass] = React.useState<boolean>(false);
  const [fill, setFill] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [tefl, setTefl] = React.useState<TeflType>({
    listening_tefl: '',
    grammar_tefl: '',
    reading_tefl: '',
  });

  const updateTefl = (params: keyof TeflType, value: string) => {
    setTefl((prevState) => ({ ...prevState, [params]: value }));
  };
  function validateAll(): boolean {
    return !!(
      validateTefl(tefl.grammar_tefl) &&
      validateTefl(tefl.listening_tefl) &&
      validateTefl(tefl.reading_tefl)
    );
  }

  const getAverageToefl = async () => {
    const resData = await fetchUserHistory(id);

    if (resData.isSuccess) {
      const { listening_tefl, grammar_tefl, reading_tefl, avg_tefl } =
        resData.data[0];

      const data: UserTeflType = {
        listening_tefl,
        grammar_tefl,
        reading_tefl,
        avg_tefl,
      };

      Number(avg_tefl) > 477 ? setPass(true) : setPass(false);
      setFill(false);
      store.setAverageToefl(data);
    } else {
      setError(resData.message);
      setLoading(false);
    }
  };

  const submit = async () => {
    setLoading(true);
    setError(null);
    const resData = await postTeflData(tefl, id);
    if (resData.isSuccess) {
      getAverageToefl();
    } else {
      setError(resData.message);
      setLoading(false);
    }
  };

  const refreshForm = () => {
    setError(null);
    setPass(false);
    setFill(true);
    setLoading(false);
    setTefl({
      listening_tefl: '',
      grammar_tefl: '',
      reading_tefl: '',
    });
  };

  return (
    <>
      {fill ? (
        <>
          <div className='max-w-lg p-1 shadow-md rounded-3xl bg-primary-500'>
            <div className='px-4 py-5 text-white border-2 border-white border-dashed rounded-3xl'>
              <h2>Formulir Pengisian Tefl</h2>
              <hr />
              <div className='grid grid-cols-2 gap-4 mt-4'>
                <p>Listening</p>
                <Input
                  id={'listening-tefl'}
                  label={''}
                  type='number'
                  value={tefl.listening_tefl}
                  className='text-black'
                  errorClassName='bg-white px-1 rounded-full'
                  error={
                    !validateTefl(tefl.listening_tefl) &&
                    tefl.listening_tefl.length > 0
                      ? 'Tefl Listening harus > 0'
                      : ''
                  }
                  onChange={(e) => updateTefl('listening_tefl', e.target.value)}
                />
                <p>Grammar</p>
                <Input
                  id={'grammar-tefl'}
                  label={''}
                  type='number'
                  value={tefl.grammar_tefl}
                  className='text-black'
                  errorClassName='bg-white px-1 rounded-full'
                  error={
                    !validateTefl(tefl.grammar_tefl) &&
                    tefl.grammar_tefl.length > 0
                      ? 'Tefl Grammar harus > 0'
                      : ''
                  }
                  onChange={(e) => updateTefl('grammar_tefl', e.target.value)}
                />
                <p>Reading</p>
                <Input
                  id={'reading-tefl'}
                  label={''}
                  type='number'
                  value={tefl.reading_tefl}
                  className='text-black'
                  errorClassName='bg-white px-1 rounded-full'
                  error={
                    !validateTefl(tefl.reading_tefl) &&
                    tefl.reading_tefl.length > 0
                      ? 'Tefl Reading harus > 0'
                      : ''
                  }
                  onChange={(e) => updateTefl('reading_tefl', e.target.value)}
                />
              </div>
              <div className='flex flex-col justify-center w-full mt-4 '>
                <Button
                  isLoading={loading}
                  disabled={!validateAll()}
                  variants='secondary'
                  onClick={() => submit()}
                >
                  Test Tefl
                </Button>
                <div>
                  {error && (
                    <p className='px-4 py-2 text-xs text-red-500 bg-white rounded-lg'>
                      {error}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Transition
          appear={true}
          show={!fill}
          enter='transition-transform duration-100 ease-in-out'
          enterFrom='-translate-y-16'
          enterTo='translate-y-0'
          leave='transition-scale duration-250'
          leaveFrom='scale-100'
          leaveTo='scale-0'
        >
          <p className='w-full mb-4 pl-auto'>
            Mau cek lagi?
            <span
              onClick={() => refreshForm()}
              className='px-2 text-white rounded-full cursor-pointer whitespace-nowrap bg-primary-500'
            >
              isi form lagi
            </span>
          </p>
          <div className='max-w-lg p-1 shadow-md rounded-3xl bg-primary-500'>
            <div className='px-4 py-5 text-white border-2 border-white border-dashed rounded-3xl'>
              <PassSection isPass={pass} />
            </div>
          </div>
        </Transition>
      )}
    </>
  );
}
