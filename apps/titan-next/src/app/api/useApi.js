'use client';

import { useEffect, useState } from 'react';

export default function useApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getAccessToken = () => localStorage.getItem('access_token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAccessToken();
        if (!token) throw new Error('No access token found');

        // Run <"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:/chrome-dev"> in cmdprmt to Disable Web Security in Chrome so that CORS is resolved.

        const response = await fetch(`http://local.openedx.io:8000${endpoint}`, {
          headers: {
            Authorization: `JWT ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(`Failed to fetch data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
