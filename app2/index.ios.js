//Import
import React from 'react';
import {Text,View, AppRegistry, Image} from 'react-native';

//Formatações
const Estilos = {
  principal:{
    paddingTop:40
  }, 
  imagem:{
    justifyContent:'flex-end',
    paddingBottom: 5
  }    


};
const botaoPressionado = () => {
  alert('Botao Pressionado')
}
//Criar o Componente
const App2 = () => {
  const {principal,imagem} = Estilos;
  return (
    <View style={principal}>
      <Image style={imagem} source={require('./imgs/uvas.png')}>
        <Text>Legenda</Text>
      </Image>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App2);