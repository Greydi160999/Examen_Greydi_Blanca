import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import AppointmentScreen from '../Screens/AppointmentScreen';
import ProductsScreen from '../Screens/ProductsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BellezaApp" component={HomeScreen} />
      <Stack.Screen name="Cita" component={AppointmentScreen} />
      <Stack.Screen name="Productos" component={ProductsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
