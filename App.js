import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchComponent from './src/components/SearchComponent';
import DashboardComponent from './src/components/DashboardComponent';

const AppStack = createStackNavigator({
  Search: SearchComponent,
  Dash: DashboardComponent,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
