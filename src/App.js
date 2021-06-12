import React, { useState } from 'react';
import './style.css';
import AddUser from './components/USERS/adduser';
import UsersList from './components/USERS/usersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, { name: uName, age: uAge, ID: Math.random() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
