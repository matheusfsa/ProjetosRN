//Import
import React from 'react';
import {Text,View, AppRegistry} from 'react-native';

//Formatações
const Estilos = {
  principal:{
    paddingTop:40
  }    

};

//Criar o Componente
const App2 = () => {
  const {principal} = Estilos;
  return (
    <View style={principal}>
      <Button 
        title='Clique Aqui'
        color="#841584"
      />
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App2);