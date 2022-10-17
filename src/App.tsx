import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from './components/screens/CartScreen';
import LoadingScreen from './components/screens/LoadingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  [RoutingName.CARTSCREEN]: undefined;
  [RoutingName.LOADINGSCREEN]: undefined;
};

export enum RoutingName {
  CARTSCREEN = 'CartScreen',
  LOADINGSCREEN = 'LoadingScreen',
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={RoutingName.LOADINGSCREEN}
          component={LoadingScreen}
        />
        <Stack.Screen name={RoutingName.CARTSCREEN} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
