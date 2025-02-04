// src/App.js
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home.js';
import Users from './Users.js';
import Dashboard from './Dashboard.js';
import LogoutButton from 'shared/components/LogoutButton.js';

import '../../../packages/shared/styles/globals.css';

// import { Link } from 'react-router-dom';
// import Link from 'next/link';

const App = () => {

  const savedUrl = localStorage.getItem('url');

  useEffect(() => {
    fetch('/mock/config.json') // Replace with actual API endpoint
      .then(response => response.json())
      .then(data => {
        console.log(data, "RES");

        const fontFamily = data.fontFamily ? data.fontFamily : 'Roboto'; // Use Roboto only if no font is provided
        document.documentElement.style.setProperty('--font-family', fontFamily);
        document.documentElement.style.setProperty('--font-weight', data.fontWeight);
      })
      .catch(error => console.error('Error fetching font config:', error));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={savedUrl ? <Navigate replace to={savedUrl} /> : <Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/auth/users" element={<Users />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* <Link to="/users">Users</Link> */}
      {/* <Link href="/users">Users</Link> */}

    </div>
  );
}

export default App;
