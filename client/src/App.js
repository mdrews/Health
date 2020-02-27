import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logo from './logo.svg';
import './App.css';
import Weights from './components/Weights';
import { weightReducer } from './reducers/weightReducer';

const store = createStore(weightReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Provider store={store}><Weights /></Provider>
      </header>
    </div>
  );
}

export default App;
