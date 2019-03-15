export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

export const modificaCpf = (texto) => {
    return {
        type: 'modifica_cpf',
        payload: texto
    }
}

export const modificaSobrenome = (texto) => {
    return {
        type: 'modifica_sobrenome',
        payload: texto
    }
}

export const modificaNumero = (texto) => {
    return {
        type: 'modifica_numero',
        payload: texto
    }
}

export const modificaDataNascimento = (texto) => {
    return {
        type: 'modifica_data_nascimento',
        payload: texto
    }
}
export const modificaRenda = (texto) => {
    return {
        type: 'modifica_data_nascimento',
        payload: texto
    }
}
export const modificaBairro = (texto) => {
    return {
        type: 'modifica_bairro',
        payload: texto
    }
}

export const modificaCep = (texto) => {
    return {
        type: 'modifica_cep',
        payload: texto
    }
}

export const modificaRua = (texto) => {
    return {
        type: 'modifica_rua',
        payload: texto
    }
}

export const modificaNumeroCasa = (texto) => {
    return {
        type: 'modifica_numero_casa',
        payload: texto
    }
}

export const modificaComplemento = (texto) => {
    return {
        type: 'modifica_complemento',
        payload: texto
    }
}

export const modificaTipoDeReforma = (texto) => {
    return {
        type: 'modifica_tipo_de_reforma',
        payload: texto
    }
}

export const modificaComentario = (texto) => {
    return {
        type: 'modifica_comentario',
        payload: texto
    }
}

export const modificaCidade = (texto) => {
    return {
        type: 'modifica_cidade',
        payload: texto
    }
}

export const modificaEstado = (texto) => {
    return {
        type: 'modifica_estado',
        payload: texto
    }
}
export const cadastraPessoa = ({nome, sobrenome, cpf, numero, data_nascimento}) => {
    alert(nome);
    return {
        type: 'teste'
    }
}
export const cadastraCasa = ({ cpf, cep, rua, numero_casa, complemento, tipo_de_reforma, comentario, cidade, estado }) => {
    alert(cep);
    return {
        type: 'teste'
    }
}