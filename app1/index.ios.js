var React = require('react'); //modulo react
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;
var View = require('react-native').View;
var Button = require('react-native').Button;
/*() => { return App} é a msm coisa  que () => App*/
const gerarNumeroAleatorio = () => {
  var numero_aleatorio = Math.random()*10;
  alert(numero_aleatorio);
}
const App = () => {   
  return (
      //JSX, uma forma de representação dos objetos em um formato de componentes
      <View>
        <Text>Meu primeiro APP</Text> 
        <Button 
          title="Gera um número randômico"
          onPress={gerarNumeroAleatorio}
         /> 
      </View>
    );
};

AppRegistry.registerComponent('app1', () =>  App);