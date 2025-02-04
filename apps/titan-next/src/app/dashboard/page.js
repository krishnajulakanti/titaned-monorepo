'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

// import Link from 'next/link';

const DashboardAppInReact = dynamic(() => import('titan-react/src/App'), { ssr: false });

const DashboardPage = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get('path');
  console.log(path, "Test");
  if (path !== null && path !== '' && path !== '/') {
    localStorage.setItem('url', path);
  }
  // <BrowserRouter>
  return <DashboardAppInReact />
  // </BrowserRouter>
};

export default DashboardPage;
