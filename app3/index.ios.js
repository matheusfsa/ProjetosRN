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
class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.teste}</Text>
      </View>
      )
  }
}
export default class app3 extends Component {
  constructor(props){
    super(props);
    this.state = {texto: 'Texto teste'};
  }
  alteraTexto(){
    this.setState({texto: 'Outra Coisa'});
  }
  render(){
    return(
      <MeuComponente teste={this.state.texto}></MeuComponente>
      <Button
       title = 'Botao'
       onPress={() => {this.alteraTexto()}}
      />
      );
  }
}

AppRegistry.registerComponent('app3', () => app3);
