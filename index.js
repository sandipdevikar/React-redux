import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
import store from './store/store';
import {Provider} from 'react-redux';
import Register from './components/Register'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
      <Register/>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
