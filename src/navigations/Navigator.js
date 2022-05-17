import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Start from '../screens/Start';
import Menu from '../screens/Menu'

import Pskov from '../screens/Pskov/Pskov'
import P_church from '../screens/Pskov/P_church'
import P_cinema from '../screens/Pskov/P_cinema'
import P_park from '../screens/Pskov/P_park'

import Vladimir from '../screens/Vladimir/Vladimir'
import V_church from '../screens/Vladimir/V_church'
import V_cinema from '../screens/Vladimir/V_cinema'
import V_park from '../screens/Vladimir/V_park'

import Ufa from '../screens/Ufa/Ufa'
import U_church from '../screens/Ufa/U_church'
import U_cinema from '../screens/Ufa/U_cinema'
import U_park from '../screens/Ufa/U_park'

import Astrakhan from '../screens/Astrakhan/Astrakhan'
import A_church from '../screens/Astrakhan/A_church'
import A_cinema from '../screens/Astrakhan/A_cinema'
import A_park from '../screens/Astrakhan/A_park'
 

const stackNavigatorOptions = {
  headerShown: false
}

const AppNavigator = createStackNavigator({
  Start: {screen: Start},
  Menu: {screen: Menu},

  Pskov: {screen: Pskov},
  P_church: {screen: P_church},
  P_cinema: {screen: P_cinema},
  P_park: {screen: P_park},

  Vladimir: {screen: Vladimir},
  V_church: {screen: V_church},
  V_cinema: {screen: V_cinema},
  V_park: {screen: V_park},

  Ufa: {screen: Ufa},
  U_church: {screen: U_church},
  U_cinema: {screen: U_cinema},
  U_park: {screen: U_park},


  Astrakhan: {screen: Astrakhan},
  A_church: {screen: A_church},
  A_cinema: {screen: A_cinema},
  A_park: {screen: A_park},
},
{
  defaultNavigationOptions : stackNavigatorOptions
}
);

export default createAppContainer(AppNavigator);