import {statusBar} from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


export default class App extends React.Component {
  state = {
    isFontLoad: false
  }

  async componentDidMount(){
    await Font.loadAsync({
      "SemiBold" : require('./src/fonts/Montserrat.ttf'),
      "Medium" : require('./src/fonts/Montserat_medium.otf'),
      "Regular" : require('./src/fonts/Montserrat-Regular.otf')
    });
    this.setState({isFontLoaded:true})
  }

  render(){
    return (
      <AppNavigator/>
    );
  }
}


