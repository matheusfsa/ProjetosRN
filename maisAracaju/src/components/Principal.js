import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

export default class Principal extends Component {
	_onPressButton() {
    	Alert.alert('You tapped the button!')
  	}
	render() {
	    return (
		    <View style={styles.container}>
		      	<View style={styles.cadastro}>
			        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
			          	<View style={styles.button}>
			            	<Text style={styles.buttonText}>Cadastre-se</Text>
			          	</View>
		        	</TouchableHighlight>
		        </View>
	        	<View style={styles.menuGrupo}>
	        		<View style={styles.menu}>
				        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
				          	<View style={styles.button}>
				            	<Text style={styles.buttonText}>Quem Somos?</Text>
				          	</View>
			        	</TouchableHighlight>
				        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
				          	<View style={styles.button}>
				            	<Text style={styles.buttonText}>Como Funciona?</Text>
				          	</View>
			        	</TouchableHighlight>
			        </View>
			        <View style={styles.menu}>
				        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
				          	<View style={styles.button}>
				            	<Text style={styles.buttonText}>Sugestões</Text>
				          	</View>
			        	</TouchableHighlight>
				        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
				          	<View style={styles.button}>
				            	<Text style={styles.buttonText}>Notícias</Text>
				          	</View>
			        	</TouchableHighlight>
		        	</View>
	        	</View>
	        </View>
	    );
	  }
}

const styles = StyleSheet.create({
   button: {
    marginBottom: 30,
    width: 80,
    height: 50,
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: '#2196F3'
  },
  cadastro:{
    marginTop: 30,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  menu: {
    alignItems: 'center' 
  },
  menuGrupo: {
    flexDirection: 'row' 
  }

});