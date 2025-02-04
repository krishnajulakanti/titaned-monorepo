'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import 'shared/styles/ButtonStyles.scss';

const LoginButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Function to handle the redirection when the button is clicked
  const handleLoginRedirect = () => {
    localStorage.setItem('url', '/auth/users');
    localStorage.setItem('auth_token', 'authenticated');
    setLoading(true);
    document.cookie = "auth_token=authenticated; path=/; max-age=86400";
    window.location.href = '/dashboard';
    // router.push('/auth/users'); // Redirect to React app's users page
  };

  return (
    <button onClick={handleLoginRedirect} disabled={loading} className="button button--login">
      {loading ? 'Redirecting...' : 'Login & Get full list of Users in React'}
    </button>
  );
};

export default LoginButton;
