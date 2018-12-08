var React = require('react'); //modulo react
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;
/*() => { return App} é a msm coisa  que () => App*/
const App = () =>   
  return (
      //JSX, uma forma de representação dos objetos em um formato de componentes
      <Text>Meu primeiro APP</Text> 
    );
};

AppRegistry.registerComponent('app1', () =>  App);