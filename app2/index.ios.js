//Import
import React from 'react';
import {Text,View, AppRegistry, Image, TouchableOpacity, Alert} from 'react-native';

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
const gerarNovaFrase = () => {
  var i = Math.floor(Math.random()*4);
  var frases = ["Relacionamento é para ter paz. Se for para passar nervoso, prefiro dobrar lençol com elástico.", 
              "Se a pessoa me oferecer cachaça, a amizade acaba...de começar.",
              "Me diga com quem tu andas, e eu te direi se irei junto.",
              "Estou quase morando sozinho. Só falta a minha família se mudar."];
  Alert.alert(frases[i])
}
//Criar o Componente
const App2 = () => {
  const {principal, botao, textoBotao} = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')}/>
      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}> Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App2);