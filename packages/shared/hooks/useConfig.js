'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch LMS configuration from API or local storage.
 */
export default function useConfig() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        // Check if config exists in localStorage
        const storedConfig = localStorage.getItem('lms_config');
        if (storedConfig) {
          setConfig(JSON.parse(storedConfig));
          return;
        }

        // Fetch from API if not in localStorage
        const response = await fetch('/mock/config.json'); // Replace with actual API
        const data = await response.json();

        // Save to localStorage for fast reloading
        localStorage.setItem('lms_config', JSON.stringify(data));
        setConfig(data);
      } catch (error) {
        console.error('Error fetching LMS config:', error);
      }
    };

    fetchConfig();
  }, []);

  return config;
}
