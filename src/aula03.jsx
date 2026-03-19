import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Aula03 extends Component{
    render () {
        return(
            <View style={ styles.container }>
                <TextInput
                    style={ styles.input }
                />
                <TextInput
                    style={ styles.input }
                />
                <TextInput
                    style={ styles.input }
                />
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
