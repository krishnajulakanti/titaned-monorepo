'use client';

import { useEffect } from 'react';
import 'shared/styles/ButtonStyles.scss';

const LogoutButton = ({ redirectPath = '/users' }) => {
  const handleLogout = () => {
    // Clear auth_token from cookies and local storage
    document.cookie = "auth_token=; path=/; max-age=0"; // Remove auth_token cookie
    localStorage.removeItem('auth_token'); // Remove from local storage if present
    localStorage.removeItem('url'); // Clear any stored URLs if applicable

    // Redirect user to the specified path
    window.location.href = redirectPath;
  };

  useEffect(() => {
    // This effect ensures that redirection logic applies universally
    console.log('LogoutButton mounted');
  }, []);

  return (
    <button onClick={handleLogout} className="button button--logout">
      Logout
    </button>
  );
};

export default LogoutButton;
