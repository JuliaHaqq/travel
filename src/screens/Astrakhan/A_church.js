import { Text, View, Image, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Modal, Pressable, ScrollView} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';


import * as data from '../../../data/data.json';

export default class A_church extends React.Component{

  state = {
      modalVisible: {0: false, 1: false, 2: false}
    };

  render(){
    
    const {navigate} = this.props.navigation
    
    return(
      <LinearGradient 
      colors={['#C9FFBF', '#FFAFBD']} 
      style={styles.centeredView}
      >
        <ScrollView>
          {Object.keys(data.astrakhan.church).map((item, index) => 
            <>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible[index]}
              onRequestClose={() => {
                this.setState({modalVisible: {...this.state.modalVisible, [index]: false}});
              }}
            >
              <LinearGradient
                colors={['#86fde8', '#FFAFBD']}
                style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{data.astrakhan.church[item].description}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setState({modalVisible: {...this.state.modalVisible, [index]: false}})}
                  >
                    <Text style={styles.textStyle}>Закрыть</Text>
                  </Pressable>
                </View>
              </LinearGradient>
            </Modal>

            <Pressable 
              style={[styles.button, styles.buttonOpen, styles.img]}
              onPress={() => 
                this.setState({modalVisible: {...this.state.modalVisible, [index]: true}})
              }
            > 
              <View >
                <Text style={{alignItems: "center", marginBottom: 10, fontSize: 17}}>{data.astrakhan.church[item].name}</Text>
              </View>
              <Image  source={{ uri: data.astrakhan.church[item].img }} style={{ width: 250, height: 250,  borderRadius: 10, justifyContent: "center"}} />
            </Pressable>
            </>
          )}
        </ScrollView>
        <View >
              <TouchableOpacity
                onPress={()=>navigate('Astrakhan')}
              >
                <Image source={require('../../images/back_1.png')}/>
              </TouchableOpacity>
        </View>
      </LinearGradient>
    )
  }
}


const styles =StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: '#FFEEEE',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    alignItems: "center",
    backgroundColor: "#FFEEEE",
    margin: 10,
  },
  buttonClose: {
    backgroundColor: "#F8CDDA",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    opacity:0.6,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
  },
})