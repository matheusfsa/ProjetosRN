/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Routes from "./src/components/Routes";
export default class maisAracaju extends Component {
  render() {
    return (
      <Routes />
    );
  }
}


AppRegistry.registerComponent('maisAracaju', () => maisAracaju);
