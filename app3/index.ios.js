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
  Button,
  Image
} from 'react-native';
import Topo from './src/components/topo.js'
import Icone from './src/components/icone.js'
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
                    escolhaComputador : escolhaComputador[numAleatorio],
                    resultado: resultado});
  }

  render(){
    return(
      <View>
        <Topo></Topo>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => {this.jokenpo('pedra')}}/>
          </View >
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => {this.jokenpo('papel')}}/>
          </View>
          <View style={styles.btnEscolha}>
             <Button title="tesoura" onPress={() => {this.jokenpo('tesoura')}}/>
          </View>
          
          
         
        </View>
        <View>
          <Text style={styles.txtResultado}> res: {this.state.resultado} </Text>
          <Icone escolha={} jogador={}></Icone>
          <Text> computador: {this.state.escolhaComputador}</Text>
         
          <Text> user: {this.state.escolhaUsuario}</Text>
          <Image source={require('./imgs/jokenpo.png')}/>
          
        </View>
        
        
      </View>
      );
  }
}


const styles = StyleSheet.create({
  btnEscolha: {
    width:90
  },
  painelAcoes:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 10
  },
  palco:{
    alignItens:'center',
    marginTop:10
  },
  txtResultado:{
    fontSize:25,
    fontWeight:'bold',
    color:'red'
  },
  icone:{
    alignItens:'center',
    marginTop:10
  },
  txtJogador:{
    fontSize:18
  }
});

AppRegistry.registerComponent('app3', () => app3);
