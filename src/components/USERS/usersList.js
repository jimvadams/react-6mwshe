import React from 'react';
import Card from '../UI/card';
import './usersList.css';

const UsersList = props => {
  return (
    <Card>
      <ul>
        {props.users.map(user => (
          <li>
            the user name is <strong> {user.name} </strong> and age is {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
