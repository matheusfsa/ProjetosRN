/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class app3 extends Component {
  constructor(props){
    super(props);
    this.state = {escolhaUsuario:"", escolhaComputador:""}
  }
  jokenpo(escolhaUsuario){
    var escolhaComputador = ["pedra", "papel", "tesoura"];
    var numAleatorio = Math.floor(Math.random()*3);
    this.setState({ escolhaUsuario:escolhaUsuario,
                    escolhaComputador : escolhaComputador[numAleatorio]
                    });
  }
  render(){
    return(
      <View>
        <Text> computador: {this.state.escolhaComputador}</Text>
        <Text> user: {this.state.escolhaUsuario}</Text>
        <Text> res </Text>
        <Button title="pedra" onPress={() => {this.jokenpo('pedra')}}/>
        <Button title="papel"onPress={() => {this.jokenpo('papel')}}/>
        <Button title="tesoura"onPress={() => {this.jokenpo('tesoura')}}/>
      </View>
      );
  }
}

AppRegistry.registerComponent('app3', () => app3);
