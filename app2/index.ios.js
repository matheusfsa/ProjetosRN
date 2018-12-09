//Import
import React from 'react';
import {Text,View, AppRegistry, Image} from 'react-native';

//Formatações
const Estilos = {
  principal:{
    paddingTop:40
  }    

};
const botaoPressionado = () => {
  alert('Botao Pressionado')
}
//Criar o Componente
const App2 = () => {
  const {principal} = Estilos;
  return (
    <View style={principal}>
      <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App2);