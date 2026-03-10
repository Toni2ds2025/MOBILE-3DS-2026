import React, {Component} from "react";
import { View, Text, StyleSheet } from 'react-native';

class Aula02 extends Component{
  render () {
    return (
        <View style={{ backgroundColor: 'red' }}>
            <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
            <View style={{flex: 1, backgroundColor: 'blue'}}></View>
            <View style={{flex: 1, backgroundColor: 'green'}}></View>
        </View>
    )
  }
}

export default Aula02;