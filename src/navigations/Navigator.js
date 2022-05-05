import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Start from '../screens/Start';
import Menu from '../screens/Menu'
import Pskov from '../screens/Pskov/Pskov'
import Vladimir from '../screens/Vladimir/Vladimir'
import Ufa from '../screens/Ufa/Ufa'
import Astrakhan from '../screens/Astrakhan/Astrakhan'
 

const stackNavigatorOptions = {
  headerShown: false
}

const AppNavigator = createStackNavigator({
  Start: {screen: Start},
  Menu: {screen: Menu},
  Pskov: {screen: Pskov},
  Vladimir: {screen: Vladimir},
  Ufa: {screen: Ufa},
  Astrakhan: {screen: Astrakhan}
},
{
  defaultNavigationOptions : stackNavigatorOptions
}
);

export default createAppContainer(AppNavigator);