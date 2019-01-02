import React, { Component } from 'react';
import {
  View
} from 'react-native';
import axios from 'axios';
import Itens from './itens.js';
export default class ListaItens extends Component {
  componentWillMount(){
  	axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
  	.then( response => { console.log(response); })
  	.cacth(() => {console.log('Erro'); });
  }
  render() {
    return (
    	<View>
     		<Itens/>
     		<Itens/>
     	<View>
    );
  }
}
