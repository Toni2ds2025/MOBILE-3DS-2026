import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput, Image, Button } from 'react-native';

class Aula03 extends Component{
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

                    <Button 
                        style={ styles.botao }
                        title="Entrar"
                        color="green"
                    />
                    
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
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
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
        padding: 20,
        borderRadius: 5,
    },
})
