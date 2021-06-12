import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import './ErrorModal.css';

const Overlay = props => {
  return <div className="overlay" />;
};

const ErrorBox = props => {
  return (
    <Card>
      <header>{props.title} </header>
      <main> {props.error} </main>
      <footer>
        <button onClick={props.onCloseError}>okay</button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Overlay />, document.querySelector('#overlays'))}
      {ReactDOM.createPortal(<ErrorBox title={props.title} error={props.error} onCloseError={props.onCloseError} />, document.querySelector('#overlays'))}
    </>
  );
};

export default ErrorModal;
