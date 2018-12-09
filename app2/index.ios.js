//Import
import React from 'react';
import {Text,View, AppRegistry, Image, TouchableOpacity} from 'react-native';

//Formatações
const Estilos = {
  principal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingHorizontal:40,
    paddingVertical: 10,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
const botaoPressionado = () => {}
//Criar o Componente
const App2 = () => {
  const {principal, botao, textoBotao} = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')}/>
      <TouchableOpacity style={botao}>
        <Text style={textoBotao}> Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App2);