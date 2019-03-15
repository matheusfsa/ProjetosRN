import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { 
  modificaNome,
  modificaCpf,
  modificaDataNascimento,
  modificaSobrenome,
  modificaNumero
} from '../actions/CadastroActions';
class FormPessoa extends Component {
	render() {
	    return (
		    <View style={styles.container}>
          <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.nome} 
                            placeholder="Nome" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaNome(texto)} 
                        />
                        <TextInput 
                            value={this.props.sobrenome} 
                            placeholder="Sobrenome" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaSobrenome(texto)} 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.cpf} 
                            placeholder="CPF" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaCpf(texto)} 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.numero} 
                            placeholder="Numero" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaNumero(texto)} 
                        />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.data_nascimento} 
                            placeholder="Data de Nascimento" 
                            placeholderTextColor='#fff' 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaDataNascimento(texto)} 
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                      <TouchableHighlight onPress={() => Actions.formCasa()} underlayColor="#6098A9">
                        <View style={styles.button}>
                          <Text style={styles.buttonText}> Avançar</Text>
                        </View>
                      </TouchableHighlight>
                    </View>
	      </View>
	    );
	  }
}

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6098A9',
  },
  button: {
    marginBottom: 30,
    width: 80,
    height: 80,
    alignItems: 'center',
    borderRadius:10,
    margin: 15, 
    backgroundColor: '#B0E1DD'
  },
  buttonText: {
    marginTop:20,
    alignItems:'center',
    fontSize:15,
    justifyContent:'center'
  }
});
const mapStateToProps = state => { 
  console.log(state);
  
  return (
      {
          nome: state.CadastroReducer.nome,
          sobrenome: state.CadastroReducer.sobrenome,
          cpf: state.CadastroReducer.cpf,
          numero: state.CadastroReducer.numero,
          data_nascimento: state.cadastraUsuario.data_nascimento,
      }
  );
}

export default connect(
  mapStateToProps, 
  {
    modificaNome,
    modificaCpf,
    modificaDataNascimento,
    modificaSobrenome,
    modificaNumero
  }
)(FormPessoa);