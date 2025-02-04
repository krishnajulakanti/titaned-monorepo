import React, { useEffect } from 'react';
import { Header } from 'shared/components/Header';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => { // Automatically redirect to /users when Dashboard is accessed
    navigate('/auth/users');
  }, [navigate]);

  return null; // No need to render anything

  // <div>
  //   <Header />
  //   <h2>Dashboard in React</h2>
  //   <Link to="/users">Users</Link>
  // </div>
};

export default Dashboard;
