import LoginButton from './LoginButton';
import { getUsers } from './userService'; // Service to fetch user data
import { cookies } from 'next/headers';

import LogoutButton from 'shared/components/LogoutButton';
import NavigateButton from './NavigateButton';

// Fetch users directly in the server-side code of the Server Component
async function UsersPage() {

  const users = await getUsers(); // Fetch the first 2 users

  // Access the cookies to check for `auth_token`
  const cookieStore = cookies();
  const authToken = cookieStore.get('auth_token'); // Retrieve the 'auth_token' cookie

  return (

    <div>
      <h1>Users List</h1>
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

      <br />
      <br />

      {/* Button to trigger navigation to React app */}
      {authToken ? (
        <div>
          <NavigateButton />
          <LogoutButton redirectPath="/users" />
        </div>
      ) : <LoginButton />}
    </div>
  );
}

export default UsersPage;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from "next/link";


// const Users = () => {
//   // State to store the fetched users data
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data on page load
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Render loading, error, or the users list
//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>Error: {error}</h1>;
//   }

// const handleLogin = () => {
//   localStorage.setItem('url', '/auth/users');
//   window.location.href = '/dashboard';
// };

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.slice(0, 2).map((user) => (
// <li key={user.id}>
//   <h3>{user.name}</h3>
//   <p><strong>Username:</strong> {user.username}</p>
//   <p><strong>Email:</strong> {user.email}</p>
//   <p><strong>Phone:</strong> {user.phone}</p>
//   <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
//   <hr />
// </li>
//         ))}
//       </ul>

//       <br />
//       <button onClick={handleLogin}>
//         Login & Get full list of Users in React
//         {/* <Link href="/dashboard">Login & Get full list of Users in React</Link> */}
//       </button>

//     </div>
//   );
// };

// export default Users;

