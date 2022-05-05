
import { Text, View, Image, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';




export default class Menu extends React.Component{

  render(){
    
    const {navigate} = this.props.navigation

    return(
      <LinearGradient
        colors={['#86fde8','#bfe9ff', '#6be585']} 
        style={styles.container}
      >
        <Text style={{
          fontSize:25,
          fontFamily:'SemiBold',
          alignSelf:'center', }}
        >Выберите город</Text>
        <Text style={{
          fontFanily: 'Regular',
          marginHrizontal: 55,
          textAlign:'center',
          marginTop:5,
          opacity:0.4 }}
        ></Text>       
        <View style={styles.btn}>
          <Button
                onPress={()=>navigate('Pskov')}
                title="Псков"
                color='#38B2CE'
          />
        </View>
        <View style={styles.btn}>
          <Button
                onPress={()=>navigate('Vladimir')}
                title="Владимир"
                color='#38B2CE'
          />
        </View>
        <View style={styles.btn}>
          <Button
                onPress={()=>navigate('Ufa')}
                title="Уфа"
                color='#38B2CE'
          />
        </View>
        <View style={styles.btn}>
          <Button
                onPress={()=>navigate('Astrakhan')}
                title="Астрахань"
                color='#38B2CE'
          />
        </View>
        <View >
          <TouchableOpacity
              onPress={()=>navigate('Start')}
            >
              <Image source={require('../images/back_o.png')}/>
          </TouchableOpacity>
        </View> 
        <Image source = {require('../images/travel.png')}
          style={styles.img_gg}
        />
        
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
  btn: {
    marginTop: 10,
    arginlorizontal:55,
    fontSize: 30,
    shadowColor: 'black',
    background: '#A4F43D',
    width: '60%',
  },
  img_gg: {
    marginTop: 10,
    width:'100%',
    height:'45%'
  }
})