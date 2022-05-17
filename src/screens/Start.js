import React from 'react';
import { Text, View, Image, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';


export default class Start extends React.Component{
  render(){
    const {navigate} = this.props.navigation

    return(
        <LinearGradient
          colors={['#1FA2FF', '#12D8FA','#85D8CE']} 
          style={styles.container}
          >
          <Image 
            source = {require('../images/images_gg.png')}
            style={styles.img_gg}/>
          <Text 
          style={styles.text_start}
          >
          Добро пожаловать
          </Text>
          <Text style={{
            textAlign:'center',
            marginTop:5,
            opacity:0.6 }}
          >
          Мобильное приложение для планирования путешествий
          </Text>
          <View style={styles.btn}>
          <TouchableOpacity
              onPress={()=>navigate('Menu')}
            >
              <Image source={require('../images/top.png')}/>
          </TouchableOpacity>
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
    alignSelf:'center', 
    marginTop: 100,
  },
  btn: {
    marginTop: 50,
    color: '#EB53B2',
  },
  img_gg: {
    width: 300,
    height: 300,
  }
})