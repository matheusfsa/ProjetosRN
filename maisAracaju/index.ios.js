/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Principal from "./src/principal";
export default class maisAracaju extends Component {
  render() {
    return (
      <Principal />
    );
  }
}


AppRegistry.registerComponent('maisAracaju', () => maisAracaju);
