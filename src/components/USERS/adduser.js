import React, { useState } from 'react';
import Card from '../UI/card';
import ErrorModal from '../UI/ErrorModal';
import './adduser.css';
import Wrapper from '../helpers/Wrapper';

const AddUser = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const nameChangehandler = event => {
    setEnteredName(event.target.value);
  };

  const ageChangehandler = event => {
    setEnteredAge(event.target.value);
  };

  const AddUserHandler = event => {
    event.preventDefault();

    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 0
    ) {
      setError({
        title: 'an Error has ben made!',
        error: 'hi, you made same error there'
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    setEnteredAge('');
    setEnteredName('');
  };

  const CloseErrorHandler = () => {
    setError('');
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          onCloseError={CloseErrorHandler}
          error={error.error}
        />
      )}
      <Card>
        <form className="adduser-form" onSubmit={AddUserHandler}>
          <label htmlFor="name">name</label>
          <input
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangehandler}
          />
          <label htmlFor="age">age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangehandler}
          />
          <button type="submit"> ADD USER</button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
