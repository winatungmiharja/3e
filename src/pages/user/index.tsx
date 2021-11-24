import { useRouter } from 'next/router';
import * as React from 'react';

export default function IndexPage() {
  const router = useRouter();
  React.useEffect(() => {
    router.push('/user/home');
  });
  return (
    <div>
      <h1>HALO</h1>
    </div>
  );
}
