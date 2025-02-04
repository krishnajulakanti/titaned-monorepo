'use client';

import Header from './header/Header';

export default function LMSPage() {

  const getConfig = localStorage.getItem('lms_config');
  const config = JSON.parse(getConfig);

  console.log(config, "config");

  return (
    <div>
      <Header content={config?.layout?.header} />

      {/* <Footer content={config?.layout?.footer?.content} /> */}
    </div>
  );
}
