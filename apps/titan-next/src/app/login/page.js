'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('kjulakanti');
  const [password, setPassword] = useState('kjulakanti');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Encode client_id and client_secret in base64
    const clientId = process.env.OPENEDX_CLIENT_ID;
    const clientSecret = process.env.OPENEDX_CLIENT_SECRET;
    const credentials = `${clientId}:${clientSecret}`;
    // const encodedCredentials = btoa(credentials);  // Base64 encode
    const encodedCredentials = btoa('kaIk9Sj6Khzw9kdYpVAatuPp0FNxe6meXvQkBy2Q:NT1dR1cespttqPxpGvKoFTXlepRNXZ2lQYWt1wyvWoa6g3jTbXRHYGbkZWTp0mIEvxpeUcSM1J2xhYY4yZyllxvKaHeOXR6jS7Ln1DOrK3DeDiHH6XgyJmHyUmeYpgRE');  // Base64 encode

    console.log('Encoded Credentials:', encodedCredentials);

    // const loginData = {
    //   grant_type: 'client_credentials',
    //   token_type: 'jwt',
    // };

    const loginData = {
      client_id: 'viarTQcJKyYoJyA3n9OvUxrviqgpCYG1cZLsBF3n', // Public id
      grant_type: 'password',
      username: email,
      password: password,
      token_type: 'JWT',
    };

    try {
      const response = await fetch(`api/oauth2/access_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'Authorization': `Basic ${encodedCredentials}`,
          'Accept': 'application/json',
        },
        body: new URLSearchParams(loginData), // Use URLSearchParams to encode data as form data
        // mode: 'no-cors'  // Remove this if you are handling CORS on the server
      });

      if (!response.ok) {
        throw new Error('Invalid credentials or server error');
      }

      const data = await response.json();
      console.log('Response:', data);
      // Store the access token in localStorage or cookies
      localStorage.setItem('access_token', data.access_token);

      // Redirect to another page after login
      router.push('/courses');
    } catch (error) {
      setError('Login failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login to OpenEDX</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
