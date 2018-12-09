//Import
import React from 'react';
import {Text,View, AppRegistry} from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#08509B',
    paddingTop:15,
    shadowColor: '#000000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 1,
    shadowRadius: 3
    //Largura e Altura(em dp): width e height
    //espaçamento interno: padding{Top,Botton, Left, Right, Vertical, Horizontal}
    //espaçamento externo: margin{Top,Botton, Left, Right, Vertical, Horizontal}
  }
};

//Criar o Componente
const App2 = () => {
  return (
    <View>
      <Text style={Estilos.estiloTexto}> "Frases do dia"</Text>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App2);