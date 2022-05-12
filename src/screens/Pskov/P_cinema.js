import {statusBar} from 'expo-status-bar';
import * as React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Constants from 'expo-constants';
import {AppLoading} from 'expo';
import * as data from '../../../data/data.json';


export default class P_cinema extends React.Component {

    state = {
      modalVisible: {0: false, 1: false, 2: false}
    };

  render(){

    const {navigate} = this.props.navigation

    const church_1 = data.pskov.cinema.ch_1;
    
    return (
      <LinearGradient 
      colors={['#C9FFBF', '#FFAFBD']} 
      style={styles.centeredView}
      >
        <ScrollView>
          {Object.keys(data.pskov.cinema).map((item, index) => 
            <>
            {console.log(this.state.modalVisible)}
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible[index]}
              onRequestClose={() => {
                this.setState({modalVisible: {...this.state.modalVisible, [index]: false}});
              }}
            >
              <LinearGradient
                colors={['#86fde8','#bfe9ff', '#6be585']} 
                style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{data.pskov.cinema[item].description}</Text>
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
              <View>
                <Text style={{alignItems: "center", marginBottom: 10, fontSize: 17}}>{data.pskov.cinema[item].name}</Text>
              </View>
              <Image source={{ uri: data.pskov.cinema[item].img }} style={{ width: 250, height: 250,  borderRadius: 10, justifyContent: "center"}} />
            </Pressable>
            </>
          )}
        </ScrollView>
        <View >
              <TouchableOpacity
                onPress={()=>navigate('Pskov')}
              >
                <Image source={require('../../images/back_1.png')}/>
              </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: '#b6fbff',
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
    backgroundColor: "#11FFBD",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Inter-Black',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily:'SemiBold',
    fontWeight: "bold",
    fontSize: 17
  },
});

