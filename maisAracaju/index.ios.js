/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  AppRegistry
} from 'react-native';
import Routes from "./src/Routes";
export default class maisAracaju extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
                <Routes />
          </Provider>
    );
  }
}


AppRegistry.registerComponent('maisAracaju', () => maisAracaju);
