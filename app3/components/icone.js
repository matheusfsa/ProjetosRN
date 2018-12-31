import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';
const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

class Icone extends Component{
  render(){
    //this.props.escolha
    //this.props.jogador
    if(this.props.escolha == 'pedra'){
      return(
         <View style={styles.icone}>
           <Text style={styles.txtJogador}>{this.props.jogador}</text>  
           <Image source={imgPedra}/>
          </View>
        );
    }else if(this.props.escolha == 'papel'){
        return(
         <View style={styles.icone}>
           <Text>{this.props.jogador}</text>  
           <Image source={imgPapel}/>
          </View>
        );
    }else{
        return(
         <View style={styles.icone}>
           <Text style={styles.txtJogador}>{this.props.jogador}</text>  
           <Image source={imgTesoura}/>
          </View>
        );
    }
  }
}
const styles = StyleSheet.create({
  icone:{
    alignItens:'center',
    marginTop:10
  },
  txtJogador:{
    fontSize:18
  }
});
export default Icone;