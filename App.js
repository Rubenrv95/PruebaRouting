import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackView } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UsersScreen from './screens/UsersScreen';
import AddUser from './screens/AddUser';
import MapsScreen from './screens/MapsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen options={{headerShown : false}} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{headerShown : false}}  name="Home" component={HomeScreen}/>
        <Stack.Screen name="Users" component={UsersScreen}/>
        <Stack.Screen name="Añadir usuario" component={AddUser}/>
        <Stack.Screen name="Mapas" component={MapsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40
  },

  TextInput: {
      height: 50,
      width: 150,
      color: 'black',
      textAlign: 'center',
      backgroundColor: '#c9c9c9',
      borderRadius: 10,
  },

  VistaInput: {
      marginTop: 15,
      borderRadius: 10,
      alignItems: 'center',
  },

  firmText: {
    marginTop: 80,
    color: '#999999',
  },

  btn: {
      backgroundColor: 'black',
      borderRadius: 6,
      alignItems:"center",
      justifyContent:"center",
      marginTop: 30,
      width: 130,
      height: 40,
  },

  btnText: {
      color: 'white',
  }
});
