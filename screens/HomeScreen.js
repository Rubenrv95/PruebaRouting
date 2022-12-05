import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'; 

const HomeScreen = () => {
  const navigation = useNavigation()


  const handleUsers = () => {
     navigation.navigate("Users")
  }

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

        <TouchableOpacity style={styles.btnNav} onPress={handleUsers}>
            <Text style={styles.btnText}>Usuarios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.btnText}>Mapas</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnLogOut} onPress={handleSignOut}>
            <Text style={styles.btnText}>Cerrar sesión</Text>
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
  btnNav: {
    backgroundColor: 'blue',
    borderRadius: 6,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: 50,
    width: 130,
    height: 40,
},

  btnLogOut: {
      backgroundColor: 'red',
      borderRadius: 6,
      alignItems:"center",
      justifyContent:"center",
      marginTop: 300,
      width: 130,
      height: 40,
  },

  btnText: {
      color: 'white',
  }
});
