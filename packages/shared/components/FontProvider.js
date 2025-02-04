'use client'; // Ensure this runs only on the client side

import { useEffect } from 'react';
import useFontFamily from 'shared/hooks/useFontFamily';

const FontProvider = () => {
  useFontFamily(); // Fetches font-family and applies it

  return null; // No UI needed, just applies font styles
};

export default FontProvider;
