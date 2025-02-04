import React, { useEffect, useState } from 'react';
import LogoutButton from 'shared/components/LogoutButton';

const Users = () => {
  // State to store the fetched users data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetch data on page load
  useEffect(() => {

    // Check if auth_token exists in localStorage or cookies
    const token = localStorage.getItem('auth_token') || document.cookie.includes('auth_token');

    if (!token) {
      // Redirect if not authenticated (you can use React Router or other methods for redirection)
      window.location.href = '/'; // Adjust based on your app's routing
      return;
    }

    setIsAuthenticated(true); // Set to true if the token is found

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    localStorage.removeItem('url');
  }, []);

  if (!isAuthenticated) {
    return <h1>Redirecting to Home as you are Logged out !</h1>; // Or show a message until redirect happens
  }

  // Render loading, error, or the users list
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <hr />
          </li>
        ))}
      </ul>

      <LogoutButton redirectPath="/users" />
    </div>
  );
};

export default Users;
