import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';

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
        <Image source={logo}/>
        <Image source={menu_cliente}/>
        <Image source={menu_contato}/>
        <Image source={menu_empresa}/>
        <Image source={menu_servico}/>
      </View>  
    );
}

