import { createSwitchNavigator } from 'react-navigation';
import {
  Entrance,
} from './components/pages'
//Importando o bottomTabNavigator
import { MainApp } from '~/components/organisms/BottomTabNavigator'

const Routes = createSwitchNavigator({
  Entrance,
  MainApp
}, {
  initialRouteName: 'Entrance',
  resetOnBlur: false,
  backBehavior: 'order'
});

export default Routes;
