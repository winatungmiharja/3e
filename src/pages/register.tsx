/* eslint-disable @next/next/no-img-element */

import * as React from 'react';

import RegisterAdmin from '@/components/container/RegisterAdmin';
import RegisterUser from '@/components/container/RegisterUser';
import UserRoleSelector from '@/components/container/UserRoleSelector';
import Layout from '@/components/layout/LandingLayout';
import Seo from '@/components/Seo';

export default function RegisterPage() {
  const [userRole, setUserRole] = React.useState<'mahasiswa' | 'admin'>(
    'mahasiswa'
  );

  return (
    <Layout isLogin={true}>
      <Seo templateTitle='Register' />

      <main>
        <section className='bg-center bg-no-repeat bg-cover bg-1 min-h-main'>
          <div className='flex justify-center px-2 py-4 md:py-16'>
            <div className='w-full max-w-5xl p-4 rounded-3xl'>
              <UserRoleSelector userRole={userRole} setUserRole={setUserRole} />
              {userRole === 'mahasiswa' ? <RegisterUser /> : <RegisterAdmin />}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
