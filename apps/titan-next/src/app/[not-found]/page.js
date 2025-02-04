'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after the unmatched route is accessed
    router.push('/');
  }, [router]);

  return <div>Redirecting to home...</div>;
};

export default NotFoundPage;
