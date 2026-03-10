import React, {Component} from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula01 extends Component{
  render () {
    return (
        <View>
            <Text>Enanan</Text>
            <Image
                style={ styles.img }
                source={{ uri: 'https://media.tenor.com/3-VE6YehEn0AAAAM/enanan-ena.gif'}}
            />
        </View>
    )
  }
}

export default Aula01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
      width: 375,
      height: 667,
  },  
});
