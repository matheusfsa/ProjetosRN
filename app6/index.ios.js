import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Rotas from './src/Rotas';
import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';

export default class app6 extends Component {
  render() {
    return (
     <Rotas />
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);
