import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Noticia extends Component {
	render() {
	    return (
		    <View style={styles.container}>
		      	<Text>Noticia</Text>
	        </View>
	    );
	  }
}

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6098A9',
  }
});