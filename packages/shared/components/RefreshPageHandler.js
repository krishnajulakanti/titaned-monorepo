'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useNavigate } from 'react-router-dom';

export const RefreshPageHandler = () => {
  const router = useRouter();
  // const navigate = useNavigate();

  console.log(window.location.pathname);

  useEffect(() => {
    // Check if the path was stored in localStorage
    const storedPath = localStorage.getItem('url');

    if (storedPath && window.location.pathname !== storedPath) {
      // router.push(storedPath);
      // navigate('/dashboard');
      window.location.href = '/dashboard';
    } else {
      // Optional: You can define a fallback page if needed
      console.log('No stored path, staying on Next.js page');
    }
  }, [router]);

  // Render the children if the page is still being rendered by Next.js
  return null;
};

export default RefreshPageHandler;
