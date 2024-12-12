import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JoinScreen from './screens/JoinScreen';
import DeviceInfoScreen from './screens/DeviceInfoScreen';

// Define type for stack navigation
export type RootStackParamList = {
  Join: undefined;
  DeviceInfo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Join"
          component={JoinScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeviceInfo"
          component={DeviceInfoScreen}
          options={{ headerBackTitle: 'Back' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
