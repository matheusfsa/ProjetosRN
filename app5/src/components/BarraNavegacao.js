import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class BarraNavegacao extends Component<Props> {
  render() {
    return (
      <View styles={styles.barraTitulo}>
        <Text styles={styles.titulo}>Atm Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo:{
    backgroundColor: '#CCC',
    padding: 10,
    height: 60 
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});
