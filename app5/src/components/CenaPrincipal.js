import React, {Component} from 'react';
import {StatusBar,StyleSheet, Text, View} from 'react-native';

import BarraNavegacao from "./BarraNavegacao";
const logo = require('../imgs/logo.png');
const menu_cliente = require('../imgs/menu_cliente.png');
const menu_contato = require('../imgs/menu_contato.png');
const menu_empresa = require('../imgs/menu_empresa.png');
const menu_servico = require('../imgs/menu_servico.png');
export default class CenaPrincipal extends Component<Props> {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#CCC'
         />
        <BarraNavegacao/>
        <View style={styles.logo}>
          <Image source={logo}/>
        </View>
        <View style={styles.menuGrupo}>
          <View style={styles.menu}>
            <Image style={styles.imgMenu} source={menu_cliente}/>
            <Image style={styles.imgMenu} source={menu_contato}/>
          </View>
          <View style={styles.menuGrupo}>
            <Image style={styles.imgMenu} source={menu_empresa}/>
            <Image style={styles.imgMenu} source={menu_servico}/>
          </View>
        </View>
      </View>  
    );
}
const styles = StyleSheet.create({
  logo:{
    marginTOp: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center' 
  },
  menuGrupo: {
    flexDirection: 'row' 
  },
  imgMenu:{
     margin: 15 
  }
});

