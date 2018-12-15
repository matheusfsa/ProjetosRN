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
    this.state = {escolhaUsuario:"", 
                  escolhaComputador:"", 
                  resultado:""}
  }
  jokenpo(escolhaUsuario){
    var escolhaComputador = ["pedra", "papel", "tesoura"];
    var numAleatorio = Math.floor(Math.random()*3);
    
    var resultado = "";
    if(escolhaComputador == "pedra"){
      if(escolhaUsuario == "pedra"){
        resultado = "Empate";
      } else if(escolhaUsuario == "papel"){
        resultado = "Vitória";
      } else {
        resultado = "Derrota";
      }
    }else if(escolhaComputador == "papel"){
      if(escolhaUsuario == "pedra"){
        resultado = "Derrota";
      } else if(escolhaUsuario == "papel"){
        resultado = "Empate";
      } else {
        resultado = "Vitória";
      }
    } else {
      if(escolhaUsuario == "pedra"){
        resultado = "Vitória";
      } else if(escolhaUsuario == "papel"){
        resultado = "Derrota";
      } else {
        resultado = "Empate";
      }
    }
    this.setState({ escolhaUsuario:escolhaUsuario,
                    escolhaComputador : escolhaComputador[numAleatorio]
                    resultado: resultado});
  }

  render(){
    return(
      <View>
        <Text> computador: {this.state.escolhaComputador}</Text>
        <Text> user: {this.state.escolhaUsuario}</Text>
        <Text> res: {this.state.resultado} </Text>
        <Button title="pedra" onPress={() => {this.jokenpo('pedra')}}/>
        <Button title="papel" onPress={() => {this.jokenpo('papel')}}/>
        <Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}}/>
      </View>
      );
  }
}

AppRegistry.registerComponent('app3', () => app3);
