'use client';

import 'shared/styles/ButtonStyles.scss';

const NavigateButton = () => {
  const handleNavigation = () => {
    window.location.href = '/auth/users';
  };

  return (
    <button
      onClick={handleNavigation}
      className="button button--login"
    >
      View Full Users List in React
    </button>
  );
};

export default NavigateButton;
