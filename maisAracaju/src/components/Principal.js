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
			          	<View style={styles.buttonCadastro}>
			            	<Text style={styles.buttonTextCadastro}>Cadastre-se</Text>
			          	</View>
		        	</TouchableHighlight>
		        </View>
	        	<View style={styles.menuGrupo}>
	        		<View style={styles.menu}>
				        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
				          	<View style={styles.button}>
				            	<Text style={styles.buttonTextC1}> Quem Somos?</Text>
				          	</View>
			        	</TouchableHighlight>
				        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
				          	<View style={styles.button}>
				            	<Text style={styles.buttonTextC1}>   Como Funciona?</Text>
				          	</View>
			        	</TouchableHighlight>
			        </View>
			        <View style={styles.menu}>
				        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
				          	<View style={styles.button}>
				            	<Text style={styles.buttonTextC2}>Sugestões</Text>
				          	</View>
			        	</TouchableHighlight>
				        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
				          	<View style={styles.button}>
				            	<Text style={styles.buttonTextC2}>Notícias</Text>
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
    height: 80,
    alignItems: 'center',
    borderRadius:10,
    margin: 15, 
    backgroundColor: '#B0E1DD'
  },
  buttonCadastro: {
    marginBottom: 30,
    width: 185,
    height: 60,
    alignItems: 'center',
    borderRadius:10,
    margin: 15, 
    backgroundColor: '#B0E1DD'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6098A9',
  },
  menu: {
    alignItems: 'center' 
  },
  menuGrupo: {
    flexDirection: 'row' 
  },
  buttonTextC1: {
    marginTop:20,
    alignItems:'center',
    fontSize:15,
    justifyContent:'center'
  },
  buttonTextC2: {
    marginTop:30,
    alignItems:'center',
    fontSize:15,
    justifyContent:'center'
  },
  buttonTextCadastro: {
    marginTop:15,
    alignItems:'center',
    fontSize:20,
    justifyContent:'center'
  }
});