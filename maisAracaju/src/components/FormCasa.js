import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { 
  cadastraPessoa
} from '../actions/CadastroActions';
class FormCasa extends Component {
  _cadastraPessoa() {

    const { nome, sobrenome, cpf, numero, data_nascimento } = this.props;

    this.props.cadastraUsuario({ nome, sobrenome, cpf, numero, data_nascimento});
  }
	render() {
	    return (
		    <View style={styles.container}>
		      	<View style={{ flex: 1 }}>
                      <TouchableHighlight onPress={() => this._cadastraPessoa} underlayColor="#6098A9">
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
    cadastraPessoa
  }
)(FormCasa);