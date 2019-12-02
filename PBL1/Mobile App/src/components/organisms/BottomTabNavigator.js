import { createBottomTabNavigator } from 'react-navigation-tabs'
import {
  AllDevices,
  MyDevices,
  MyTopics,
  Config
} from '~/components/pages'
import Theme from '~/components/theme/Theme';
import { tabBarRenderIcon } from '~/services/utils/tabBarRenderIcon';


const MainApp = createBottomTabNavigator(
  {
    'Dipositivos': { screen: AllDevices },
    'Inscritos': { screen: MyDevices },
    'Tópicos': { screen: MyTopics },
    'Configurações': { screen: Config },


  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => tabBarRenderIcon(focused, navigation.state.routeName)
    }),
    initialRouteName: 'Dipositivos',
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#FFF',
      labelStyle: {
        fontWeight: '500',
        fontSize: 12
      },
      style: {
        backgroundColor: Theme.darkGreen,
        height: 70,
        paddingBottom: 6
      }
    },
  }
);

export { MainApp }