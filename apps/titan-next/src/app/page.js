import { Header } from 'shared/components/Header';

import Link from "next/link";
import 'shared/styles/ButtonStyles.scss';

import '../../../../packages/shared/styles/globals.css';

import LocalStorageCleaner from '../../../../packages/shared/components/LocalStorageCleaner';

import LMSPage from '../../../../packages/shared/components/LmsPage';

const Home = () => {
  return (
    <div>
      <Header />
      <LocalStorageCleaner /> {/* Step 2: Add Client Component */}
      <br />
      <LMSPage />
      <h2>Welcome to Nextjs Home</h2>
      <br />
      <Link href="/users" className="button button--login">Go to Users</Link>
      <Link href="/timezones" className="button button--login">Go to Timezones</Link>
      <Link href="/login" className="button button--login">Login</Link>


      {/* <Link href="/dashboard">Go to Dashboard</Link> */}
      {/* <button onClick={() => localStorage.setItem('url', '/users')}>Users</button> */}
      {/* <Link href="/users">Users</Link> */}
    </div>)
};

export default Home;
