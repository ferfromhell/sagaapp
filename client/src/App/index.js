import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';

import logo from '../logo.svg';
import store from '../store';
import ReduxActions from '../ReduxActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <header className="App-header" style={{height: "300px"}}>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className='App-Redux'>
            <ReduxActions />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
