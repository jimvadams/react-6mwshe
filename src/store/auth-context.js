import React, { useState } from 'react';

const AuthContext = React.createContext({ isLoggedIn: false });

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
