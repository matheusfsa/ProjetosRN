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
			.then(response => { this.setState({ listaItens: response.data }); })
			.catch(() => { console.log('Erro ao recuperar os dados'); });
  }
  render() {
  	this.setState({listaItens:[{ "foto" : "http://faus.com.br/recursos/c/dmairr/imgs/mesa_vidro.jpg", "titulo" : "Mesa de vidro para computador", "valor": 160, "local_anuncio": "Santo AndrÃ©", "data_publicacao": "01/12/2016" }]});
    return (
    	<ScrollView>
    		{this.state.listaItens.map(item => {<Itens key={item.titulo} itens={item} />})}
     	</ScrollView>

    );
  }
}

