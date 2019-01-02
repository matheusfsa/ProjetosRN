import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';

import axios from 'axios';
import Itens from './itens.js';
export default class ListaItens extends Component {
  constructor(props){
  	super(props);
  	this.state = { listaItens: []};
  }
  componentWillMount(){
  	axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
  	.then( response => { this.setState({listaItens: response.data}); })
  	.catch(() => {<Text>Erro</Text> });
  }
  render() {
    return (
    	<ScrollView>
    		{this.state.listaItens.map(item => {<Itens key={item.titulo} itens={item} />})}
     		<Text>texto</Text>
     	</ScrollView>

    );
  }
}

