import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'; 

const HomeScreen = () => {
  const navigation = useNavigation()


  const handleSignOut = () => {

    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  return (
    <View style={styles.container}>
        
        <TouchableOpacity onPress={handleSignOut}>
            <Text>Cerrar sesión</Text>
        </TouchableOpacity>
    </View>



  );
}

export default HomeScreen

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
