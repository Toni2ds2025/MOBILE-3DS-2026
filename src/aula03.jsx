import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableOpacity, Alert } from 'react-native';

class Aula03 extends Component{

    handleLogin = () => {
        Alert.alert("Ação", "KanaMafu é o melhor ship!")
    }

    render () {
        return(
            <View style={ styles.container }>
                <View style={ styles.conteudo }>

                    <Image
                        style={ styles.logo }
                        //source={require('../img/Logo_Bola_PNG.png')}
                        source={{uri: "https://media.tenor.com/-85FBf2KCukAAAAM/hatsune-miku-project-sekai.gif"}}
                    />

                    <Text style={ styles.label  }> Usuário: </Text>
                    <TextInput
                        style={ styles.input }
                    />

                    <Text style={ styles.label  }> Senha: </Text>
                    <TextInput
                        style={ styles.input }
                    />

                    <TouchableOpacity style={styles.botao} onPress={this.handleLogin}>
                        <Text style={styles.botaoTexto}>Entrar</Text>
                    </TouchableOpacity>
                    
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
        width: 300,
        height: 400,
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

    botao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
    },

    botaoTexto: {
        backgroundColor: 'green',
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
        width: 250,
    },
})
