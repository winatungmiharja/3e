/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Input from '../../components/input/Input';
import Layout from '../../components/layout/LandingLayout';
import Seo from '../../components/Seo';
import { fetchAllTefl } from '../../lib/fetch';
import useAdminAuth from '../../store/authAdmin';

type TeflDataType = {
  nrp_user: string;
  name_user: string;
  department_user: string;
  hp_user: string;
  listening_tefl: string;
  grammar_tefl: string;
  reading_tefl: string;
  avg_tefl: string;
};

export default function TeflPage() {
  const [tefl, setTefl] = React.useState<TeflDataType[]>([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState<string>('');
  const store = useAdminAuth();

  const fetchAllTeflData = async () => {
    const res = await fetchAllTefl();
    if (res.isSuccess) {
      setTefl(res.data);
      setLoading(false);
    } else {
      setError(res.message);
    }
  };

  const filterData = (data: TeflDataType[], match: string) => {
    if (match.length === 0) return data;
    else
      return data.filter(
        (item) =>
          item.nrp_user.includes(match) ||
          item.name_user.toLowerCase().includes(match.toLowerCase())
      );
  };

  React.useEffect(() => {
    fetchAllTeflData();
  }, []);

  return (
    <>
      <Layout isLogout={true} isAdmin={true}>
        <Seo templateTitle='Tefl' />
        <main>
          <section>
            <div className='md:min-h-main layout'>
              <div className='flex flex-col justify-center w-full py-4 md:py-16 '>
                <div className='flex flex-col justify-between gap-4 md:flex-row'>
                  <div>
                    <h2>Data Tefl Siswa</h2>
                    <p>
                      Rekap Data Tefl{' '}
                      <span className='px-2 text-white rounded-full whitespace-nowrap bg-primary-500'>
                        English for Everyone
                      </span>
                    </p>
                  </div>
                  <Input
                    onChange={(e) => setFilter(e.target.value)}
                    id='filter'
                    label='Search User by NRP/name'
                    className='bg-primary-100'
                  />
                </div>

                <hr className='my-4 border-primary-200' />

                {filter.length > 0 && (
                  <p>
                    Hasil pencarian untuk{' '}
                    <span className='text-primary-500'>{`'${filter}'`}</span>
                  </p>
                )}
                {loading ? (
                  <div className='flex items-center justify-center w-full h-5/6'>
                    <img
                      src='/images/loading.gif'
                      className='w-16'
                      alt='loading'
                    />
                  </div>
                ) : (
                  <div className='flex flex-col max-h-96 '>
                    <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                      <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                        <div className='border-b border-gray-200 shadow'>
                          <table className='min-w-full divide-y divide-gray-200 '>
                            <thead className='sticky top-0 overflow-hidden rounded-lg bg-primary-100 '>
                              <tr className='sticky top-0 '>
                                <th
                                  scope='col'
                                  className='sticky top-0 px-6 font-medium text-left md:py-3 '
                                >
                                  Name / phone
                                </th>
                                <th
                                  scope='col'
                                  className='sticky top-0 px-6 font-medium text-left md:py-3 '
                                >
                                  Departemen / NRP
                                </th>

                                <th
                                  scope='col'
                                  className='sticky top-0 px-1 font-medium text-left md:py-3 '
                                >
                                  Listening
                                </th>
                                <th
                                  scope='col'
                                  className='sticky top-0 px-1 font-medium text-left md:py-3 '
                                >
                                  Grammar
                                </th>
                                <th
                                  scope='col'
                                  className='sticky top-0 px-1 font-medium text-left md:py-3 '
                                >
                                  Reading
                                </th>

                                <th
                                  scope='col'
                                  className='sticky top-0 px-6 font-medium text-left md:py-3 '
                                >
                                  TEFL rata-rata
                                </th>
                              </tr>
                            </thead>
                            <tbody className='overflow-y-scroll bg-white divide-y divide-gray-200 '>
                              {filterData(tefl, filter).map((item, i) => (
                                <tr key={i}>
                                  <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='flex items-center'>
                                      <div className='flex-shrink-0 w-10 h-10'>
                                        <img
                                          className='w-10 h-10 rounded-full shadow-lg'
                                          src={`/images/person_03.svg`}
                                          alt=''
                                        />
                                      </div>
                                      <div className='ml-4'>
                                        <div className='text-sm font-medium text-gray-900'>
                                          {item.name_user}
                                        </div>
                                        <div className='text-sm text-gray-500'>
                                          {item.hp_user}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-900'>
                                      {item.department_user}
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                      {item.nrp_user}
                                    </div>
                                  </td>
                                  <td className='px-1 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-500'>
                                      {item.listening_tefl}
                                    </div>
                                  </td>
                                  <td className='px-1 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-500'>
                                      {item.grammar_tefl}
                                    </div>
                                  </td>
                                  <td className='px-1 py-4 whitespace-nowrap'>
                                    <div className='text-sm text-gray-500'>
                                      {item.reading_tefl}
                                    </div>
                                  </td>

                                  <td className='px-6 py-4 whitespace-nowrap'>
                                    <span className='inline-flex px-2 text-xs font-semibold leading-5 rounded-full text-primary-800 bg-primary-100'>
                                      {item.avg_tefl}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
