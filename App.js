import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
     const [user, setUser] = useState('');
     const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} />

      <StatusBar style="auto"/>

      <View style={styles.VistaInput}>
        <TextInput style={styles.TextInput} placeholder="Usuario" placeholderTextColor= "#707070"  onChangeText={(email) => setUser(user)}/>
      </View>

      <View style={styles.VistaInput}>
        <TextInput style={styles.TextInput} placeholder="Contraseña" placeholderTextColor= "#707070"  secureTextEntry={true} onChangeText={(password) => setPassword(password)}/>
      </View>


      <View style={styles.VistaInput}>
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Conectarse</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.VistaInput}>
        <Text style={styles.firmText}>Desarrollado por Rubén Ramírez 2022</Text>
      </View>
     

    </View>


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
