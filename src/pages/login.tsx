import * as React from 'react';

import LoginAdmin from '@/components/container/LoginAdmin';
import LoginUser from '@/components/container/Loginuser';
import UserRoleSelector from '@/components/container/UserRoleSelector';
import Layout from '@/components/layout/LandingLayout';
import Seo from '@/components/Seo';

export default function LoginPage() {
  const [userRole, setUserRole] = React.useState<'mahasiswa' | 'admin'>(
    'mahasiswa'
  );

  return (
    <Layout isRegister={true}>
      <Seo templateTitle='login' />
      <main>
        <section className='bg-center bg-no-repeat bg-cover bg-1 min-h-main'>
          <div className='flex justify-center px-2 py-4 md:py-16'>
            <div className='w-full max-w-5xl p-4 rounded-3xl'>
              <UserRoleSelector userRole={userRole} setUserRole={setUserRole} />
              {userRole === 'mahasiswa' ? <LoginUser /> : <LoginAdmin />}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
