import React from 'react';
import { Text, View, Image, TextInput, Button, Alert, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

export default class Menu extends React.Component{
  render(){
    const {navigate} = this.props.navigation
    return(
      <LinearGradient
        colors={['#86fde8','#bfe9ff', '#6be585']} 
        style={styles.container}
      >
        <Text style={{
          fontSize:15,
          fontFamily:'SemiBold',
          alignSelf:'center', }}
        >Выберите климатический пояс</Text>
        <Text style={{
          fontFanily: 'Regular',
          marginHrizontal: 55,
          textAlign:'center',
          marginTop:5,
          opacity:0.4 }}
        >От этого будут зависеть предметы</Text>
        <View style={styles.btn}>
          <Button
                onPress={()=>navigate('Moderate')}
                title="Умеренный"
                color='#1B9A1B'
          />
        </View>
        <View style={styles.btn}>
          <Button
                onPress={()=>navigate('Tropical')}
                title="Тропический"
                color='#1B9A1B'
          />
        </View>
        <Image source = {require('../images/world.png')}
          style={styles.img_gg}
        />
        <View style={styles.btn}>
          <Button
                onPress={()=>navigate('Start')}
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
  btn: {
    marginTop: 30,
    arginlorizontal:55,
  },
  img_gg: {
    marginTop: 20,
    width:'100%',
    height:'50%'
  }
})