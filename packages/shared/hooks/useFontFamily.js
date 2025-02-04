'use client';

import { useEffect } from 'react';

const useFontFamily = () => {
  useEffect(() => {
    const fetchFont = async () => {
      try {
        const response = await fetch('/mock/config.json');
        const data = await response.json();
        const fontFamily = data.theme.fontFamily || 'Roboto';

        document.documentElement.style.setProperty('--font-family', fontFamily);
        localStorage.setItem('fontFamily', fontFamily); // Store in localStorage

        localStorage.setItem('lms_config', JSON.stringify(data));

      } catch (error) {
        console.error('Error fetching font config:', error);
      }
    };

    fetchFont();
  }, []);
};

export default useFontFamily;
