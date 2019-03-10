import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyDzaAtP3pS2EHo0rMxSvM8RGvUNlIJ9itw",
            authDomain: "whatsapp-clone-a1774.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-a1774.firebaseio.com",
            projectId: "whatsapp-clone-a1774",
            storageBucket: "whatsapp-clone-a1774.appspot.com",
            messagingSenderId: "882014132004"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
