import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import './style.sass';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Switch } from 'react-router-dom';
import Profile from './components/Profile';

render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Home path="/" exact />
        <Profile path="/profile" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
