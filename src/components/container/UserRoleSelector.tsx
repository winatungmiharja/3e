import * as React from 'react';

import TabButton from '../button/TabButton';

type UserRoleSelectorType = {
  userRole: 'mahasiswa' | 'admin';
  setUserRole: React.Dispatch<React.SetStateAction<'mahasiswa' | 'admin'>>;
};
export default function UserRoleSelector({
  userRole,
  setUserRole,
}: UserRoleSelectorType) {
  return (
    <div className='relative grid w-full grid-cols-2 -mb-4 -top-8'>
      <TabButton
        variants={userRole === 'mahasiswa' ? 'primary' : 'secondary'}
        onClick={() => setUserRole('mahasiswa')}
        left={true}
        right={false}
      >
        Mahasiswa
      </TabButton>
      <TabButton
        variants={userRole === 'admin' ? 'primary' : 'secondary'}
        onClick={() => setUserRole('admin')}
        right={true}
        left={false}
      >
        Admin
      </TabButton>
    </div>
  );
}
