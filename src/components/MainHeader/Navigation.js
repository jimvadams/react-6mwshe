import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import authContext from '../../store/auth-context';

const Navigation = props => {
  const value = useContext(authContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {value.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {value.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {value.isLoggedIn && (
          <li>
            <button onClick={value.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
