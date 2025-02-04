'use client';

import { useEffect, useState } from 'react';

const Timezones = () => {
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    const fetchTimezones = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/timezones');
        const data = await response.json();
        setTimezones(data);
      } catch (error) {
        console.error('Failed to fetch timezones:', error);
      }
    };

    fetchTimezones();
  }, []);

  return (
    <div>
      <h1>Available Timezones</h1>
      <ul>
        {timezones.map((timezone, index) => (
          <li key={index}>{timezone?.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Timezones;
