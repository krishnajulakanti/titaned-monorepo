'use client';

// import useConfig from '../hooks/useConfig';
import Header from './header/Header';
import Footer from './footer/Footer';
// import CoursesCard1 from '@/components/cards/CoursesCard1';
// import CoursesCard2 from '@/components/cards/CoursesCard2';

export default function LMSPage() {
  // const config = useConfig();
  const config = localStorage.getItem('lms_config');

  return (
    <div>
      <Header content={config?.layout?.header?.content} />
      <Footer content={config?.layout?.footer?.content} />
    </div>
  );
}
