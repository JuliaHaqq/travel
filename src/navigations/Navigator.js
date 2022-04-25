import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Start from '../screens/Start';
import Menu from '../screens/Menu'
import Moderate from '../screens/Moderate1'
import Tropical from '../screens/Tropical'
 

const stackNavigatorOptions = {
  headerShown: false
}

const AppNavigator = createStackNavigator({
  Start: {screen: Start},
  Menu: {screen: Menu},
  Moderate: {screen: Moderate},
  Tropical: {screen: Tropical},
},
{
  defaultNavigationOptions : stackNavigatorOptions
}
);

export default createAppContainer(AppNavigator);