import React from 'react';
import { Text, View, Image, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';


export default class Astrakhan extends React.Component{
  render(){
    const {navigate} = this.props.navigation

    return(
        <LinearGradient
          colors={['#1FA2FF', '#12D8FA','#85D8CE']} 
          style={styles.container}
        >
          <Text style={styles.text_start}>Астрахань</Text>
          <View style={styles.btn}>
            <Button
                  onPress={()=>navigate('Menu')}
                  title="Назад"
                  color='#1B9A1B'
            />
          </View> 
        </LinearGradient>
    )
  }
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text_start: {
    fontSize: 20,
    fontFamily:'SemiBold',
    alignSelf:'center', 
    marginTop: 100,
  },
  btn: {
    marginTop: 50,
    color: '#EB53B2',
  },
})