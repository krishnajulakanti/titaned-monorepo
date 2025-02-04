'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = ({ content }) => {
  const [menuAlignment, setMenuAlignment] = useState('');

  useEffect(() => {
    if (content?.menuAlignment) {
      setMenuAlignment(content.menuAlignment);
    }
  }, [content]);

  if (!content) return null; // Ensure config is available before rendering

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        {content.logo?.imageUrl && (
          <Image src={content.logo.imageUrl} alt="Logo" width={120} height={40} />
        )}
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav}`}>
        <ul className={`${styles[menuAlignment]}`}>
          {content.menus?.map((menu, index) => (
            <li key={index} className={styles.menuItem}>
              <Link href={menu.link} className={styles.menuLink}>
                {menu.label}
              </Link>
              {menu.subMenus && menu.subMenus.length > 0 && (
                <ul className={styles.subMenu}>
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subMenu.link}>{subMenu.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Auth Buttons */}
      <div className={styles.authButtons}>
        <Link href={content.authButtons?.login?.link} className={styles.login}>
          {content.authButtons?.login?.label}
        </Link>
        <Link href={content.authButtons?.signUp?.link} className={styles.signup}>
          {content.authButtons?.signUp?.label}
        </Link>
      </div>
    </header>
  );
};

export default Header;

// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './Header.module.scss';

// const Header = () => {
//   const [config, setConfig] = useState(null);
//   const [menuAlignment, setMenuAlignment] = useState('center');

//   // Function to update config from localStorage
//   const updateConfig = () => {
//     const storedConfig = JSON.parse(localStorage.getItem('lms_config'));
//     if (storedConfig) {
//       setConfig(storedConfig);
//       setMenuAlignment(storedConfig.layout?.header?.menuAlignment || 'center');
//     }
//   };

//   // Load config on mount
//   useEffect(() => {
//     updateConfig();

//     // Listen for localStorage updates from other components
//     const handleStorageChange = (event) => {
//       if (event.key === 'lms_config') {
//         updateConfig();
//       }
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   if (!config) return null; // Ensure config exists before rendering

//   return (
//     <header className={styles.header}>
//       {/* Logo */}
//       <div className={styles.logo}>
//         {config.layout?.header?.logo?.imageUrl && (
//           <Image src={config.layout.header.logo.imageUrl} alt="Logo" width={120} height={40} />
//         )}
//       </div>

//       {/* Navigation Menu */}
//       <nav className={`${styles.nav}`}>
//         <ul className={`${styles[menuAlignment]}`}>
//           {config.layout?.header?.menus?.map((menu, index) => (
//             <li key={index} className={styles.menuItem}>
//               <Link href={menu.link} className={styles.menuLink}>
//                 {menu.label}
//               </Link>
//               {menu.subMenus && menu.subMenus.length > 0 && (
//                 <ul className={styles.subMenu}>
//                   {menu.subMenus.map((subMenu, subIndex) => (
//                     <li key={subIndex}>
//                       <Link href={subMenu.link}>{subMenu.label}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Auth Buttons */}
//       <div className={styles.authButtons}>
//         <Link href={config.layout?.header?.authButtons?.login?.link} className={styles.login}>
//           {config.layout?.header?.authButtons?.login?.label}
//         </Link>
//         <Link href={config.layout?.header?.authButtons?.signUp?.link} className={styles.signup}>
//           {config.layout?.header?.authButtons?.signUp?.label}
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;
