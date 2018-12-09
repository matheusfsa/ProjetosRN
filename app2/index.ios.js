//Import
import React from 'react';
import {Text,View, AppRegistry} from 'react-native';

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
      <Button 
        onPress={botaoPressionado} 
        title="Clique Aqui"
        color="#841584"
        accessibilityLabel="Clique para abrir as notíciaas"
      />
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App2);