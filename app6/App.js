import React, { Component } from 'react';
import {
 View
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import CenaPrincipal from './src/components/CenaPrincipal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogos from './src/components/OutrosJogos';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='principal' component={CenaPrincipal} initil title="Cara ou Coroa"/>
        <Scene key='sobrejogo' component={SobreJogo}/>
        <Scene key='outrosjogos' component={OutrosJogos}/>
      </Router>
    );
  }
}

