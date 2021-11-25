/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import { fetchUserHistory } from '@/lib/fetch';

import useUserAuth, { UserTeflType } from '@/store/authUser';

export default function TeflHistorySection() {
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const store = useUserAuth();
  const id = store.user.id;
  const tefl = store.user.toefl;
  const fetchHistoryData = async () => {
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
      store.setAverageToefl(data);
      setLoading(false);
    } else {
      setError(resData.message);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (store.user.toefl?.avg_tefl === undefined) {
      fetchHistoryData();
    } else {
      store.user.toefl;
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex items-center justify-center w-full h-5/6'>
          <img src='/images/loading.gif' className='w-16' alt='loading' />
        </div>
      ) : (
        <div>
          {error && (
            <p className='px-4 py-2 text-xs text-red-500 bg-white rounded-lg'>
              {error}
            </p>
          )}
          <dl className='grid grid-cols-1 gap-3 mt-5 sm:grid-cols-4'>
            <div
              key={'listening'}
              className='p-1 overflow-hidden shadow-md bg-primary-50 rounded-xl'
            >
              <div className='p-3 border-2 border-primary-500 rounded-xl hover:bg-primary-200'>
                <dt className='text-sm font-medium text-gray-800 truncate'>
                  Listening
                </dt>
                <h3 className='mt-1 text-3xl font-semibold text-gray-900'>
                  {tefl?.listening_tefl ? (
                    tefl.listening_tefl
                  ) : (
                    <p className='text-sm'>belum ada data</p>
                  )}
                </h3>
              </div>
            </div>
            <div
              key={'reading'}
              className='p-1 overflow-hidden shadow-md bg-primary-50 rounded-xl'
            >
              <div className='p-3 border-2 border-primary-500 rounded-xl hover:bg-primary-200'>
                <dt className='text-sm font-medium text-gray-800 truncate'>
                  Reading
                </dt>
                <h3 className='mt-1 text-3xl font-semibold text-gray-900'>
                  {tefl?.reading_tefl ? (
                    tefl.reading_tefl
                  ) : (
                    <p className='text-sm'>belum ada data</p>
                  )}
                </h3>
              </div>
            </div>
            <div
              key={'grammar'}
              className='p-1 overflow-hidden shadow-md bg-primary-50 rounded-xl'
            >
              <div className='p-3 border-2 border-primary-500 rounded-xl hover:bg-primary-200'>
                <dt className='text-sm font-medium text-gray-800 truncate'>
                  Grammar
                </dt>
                <h3 className='mt-1 text-3xl font-semibold text-gray-900'>
                  {tefl?.grammar_tefl ? (
                    tefl.grammar_tefl
                  ) : (
                    <p className='text-sm'>belum ada data</p>
                  )}
                </h3>
              </div>
            </div>
            <div
              key={'Total'}
              className='p-1 overflow-hidden shadow-md bg-primary-500 rounded-xl'
            >
              <div className='p-3 border-2 border-white border-dashed rounded-xl hover:bg-primary-900'>
                <dt className='text-sm font-medium text-white truncate'>
                  Total EFL
                </dt>
                <h3 className='mt-1 text-3xl font-semibold text-white'>
                  {tefl?.avg_tefl ? (
                    tefl.avg_tefl
                  ) : (
                    <p className='text-sm'>belum ada data</p>
                  )}
                </h3>
              </div>
            </div>
          </dl>
        </div>
      )}
    </>
  );
}
