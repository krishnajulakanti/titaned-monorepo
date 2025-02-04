'use client';

import useApi from '../api/useApi';

export default function Zones() {
  const { data: timezone, loading, error } = useApi('/user_api/v1/preferences/time_zones/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Timezone:</p>
      <ul>
        {timezone.map((tz, index) => (
          <li key={index}>
            {tz.time_zone} - {tz.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
