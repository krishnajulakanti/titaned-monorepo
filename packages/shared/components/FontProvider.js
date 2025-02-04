'use client'; // Ensure this runs only on the client side

import useClientConfig from 'shared/hooks/useClientConfig';

const FontProvider = () => {
  useClientConfig(); // Fetches font-family and applies it

  return null; // No UI needed, just applies font styles
};

export default FontProvider;
