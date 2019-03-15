const INITIAL_STATE = {
    nome: '',
    sobrenome: '',
    cpf: '',
    numero:'',
    data_nascimento:'',
    renda:'',
    bairro:'',
    cep:'',
    rua:'',
    numero_casa:'',
    complemento:'',
    tipo_de_reforma:'',
    comentario:'',
    cidade:'',
    estado:''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_nome'){
        return { ...state, nome: action.payload }
    }
    if(action.type == 'modifica_sobrenome') {
        return { ...state, sobrenome: action.payload }
    }
    if(action.type == 'modifica_cpf') {
        return { ...state, cpf: action.payload }
    }
    if(action.type == 'modifica_numero') {
        return { ...state, numero: action.payload }
    }
    if(action.type == 'modifica_data_nascimento') {
        return { ...state, data_nascimento: action.payload }
    }
    if(action.type == 'modifica_renda') {
        return { ...state, renda: action.payload }
    }
    if(action.type == 'modifica_bairro') {
        return { ...state, bairro: action.payload }
    }
    if(action.type == 'modifica_rua') {
        return { ...state, numero: action.payload }
    }
    if(action.type == 'modifica_numero_casa') {
        return { ...state, numero_casa: action.payload }
    }
    if(action.type == 'modifica_complemento') {
        return { ...state, complemento: action.payload }
    }
    if(action.type == 'modifica_tipo_de_reforma') {
        return { ...state, tipo_de_reforma: action.payload }
    }
    if(action.type == 'modifica_comentario') {
        return { ...state, comentario: action.payload }
    }
    if(action.type == 'modifica_cidade') {
        return { ...state, cidade: action.payload }
    }
    if(action.type == 'modifica_estado') {
        return { ...state, estado: action.payload }
    }
    return state;
}