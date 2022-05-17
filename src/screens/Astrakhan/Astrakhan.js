import React from 'react';
import ImageButton from 'react-image-button';
import { Text, View, Image, TextInput, Button, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';


export default class Astrakhan extends React.Component{
  render(){
    const {navigate} = this.props.navigation

    return(
        <LinearGradient
          colors={['#CFDEF3', '#85D8CE','#CFDEF3']} 
          style={styles.container}
        > 
          <View>
            <Text></Text>
          </View>
          
          <View style={styles.text_start}>
            <Text style={{
              fontSize: 22,
              textAlign:'center' }}
            >Выберите тип достопримечательности</Text>
          </View>

          <View style={styles.img_gg}>

            <View style={styles.img_gg}>
              <TouchableOpacity onPress={()=>navigate('A_church')} >
                <Image source={require('../../images/church100.png')}/>
              </TouchableOpacity>
              <Text style={{
                textAlign:'center',
                marginTop:5,
                opacity:0.8 }}
              >Церкви</Text>
            </View>

            <View style={styles.img_gg}>
              <TouchableOpacity onPress={()=>navigate('A_park')} >
                <Image source={require('../../images/park100.png')}/>
              </TouchableOpacity>
              <Text style={{
                textAlign:'center',
                marginTop:5,
                opacity:0.8 }}
              >Парки</Text>
            </View>

            <View style={styles.img_gg}>
              <TouchableOpacity onPress={()=>navigate('A_cinema')} >
                <Image source={require('../../images/cinema100.png')}/>
              </TouchableOpacity>
              <Text style={{
                textAlign:'center',
                marginTop:5,
                opacity:0.8 }}
              >Театры</Text>
            </View>

          </View>
            
          
          <View >
            <TouchableOpacity
              onPress={()=>navigate('Menu')}
            >
              <Image source={require('../../images/back_1.png')}/>
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
    
  },
  text_start: {
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'center'
  },
  img_gg: {
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 15,
  },
})