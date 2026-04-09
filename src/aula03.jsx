import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

class Aula03 extends Component{
    render () {
        return(
            <View style={ styles.container }>
                <View style={ styles.conteudo }>

                    <Image
                        style={ styles.logo }
                        source={require('../img/Logo_Bola_PNG.png')}
                    />

                    <Text style={ styles.label  }> Usuário: </Text>
                    <TextInput
                        style={ styles.input }
                    />

                    <Text style={ styles.label  }> Senha: </Text>
                    <TextInput
                        style={ styles.input }
                    />

                    <TextInput style={  styles.botao }>
                        <Text style={ styles.textoBotao }>Entrar</Text>
                    </TextInput>
                </View>
            </View>
        )
    }
}

export default Aula03;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },

    conteudo: {
        borderColor: 'red',
        borderWidth: 1,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 100,
        height: 100,
    },

    label: {
        color: 'white',
    },

    input: {
        height: 40,
        margin: 20,
        width: 256,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
})
