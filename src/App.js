import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/header';
import List from './components/list/list';
import './reset.css';
import './App.scss';
import PatientDetails from './components/modal/patientDetails';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <PatientDetails />
      <Header />
      <div className="App-body">
        <List />
      </div>
    </Provider>
  );
};

export default App;
