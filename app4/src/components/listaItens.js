import React, { Component } from 'react';
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
  	.catch(() => {console.log('Erro'); });
  }
  render() {
    return (
    	<View>
    		{this.state.listaItens.map(item => {<Itens key={item.titulo} itens={item} />})}
     	</View>
    );
  }
}

