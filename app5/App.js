/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {PText, View} from 'react-native';
import CenaPrincipal from "./src/components/CenaPrincipal";
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <CenaPrincipal/>
      </View>  
    );
  }
}


