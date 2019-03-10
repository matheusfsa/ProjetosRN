import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormPessoa from './components/FormPessoa';
import FormCasa from './components/FormCasa';
import ComoFunciona from './components/ComoFunciona';
import Principal from './components/Principal';
import QuemSomos from './components/QuemSomos';
import Sugestoes from './components/Sugestoes';
import Noticias from './components/Noticias';

export default props => (
    <Router>
        <Scene key='principal' component={Principal} title="Mais Aracaju"/>
        <Scene key='formPessoa' component={FormPessoa} title="Cadastro" />
        <Scene key='formCasa' component={FormCasa} title="Cadastro" />
        <Scene key='comoFunciona' component={ComoFunciona} title="Como Funciona"/>
        <Scene key='quemSomos' component={QuemSomos} title="Quem Somos?"/>
        <Scene key='sugestoes' component={Sugestoes} title="Sugestões"/>
        <Scene key='noticias' component={Noticias} title="Notícias"/>
    </Router>
);
