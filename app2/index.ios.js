//Import
import React from 'react';
import {Text,View, AppRegistry} from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 50
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