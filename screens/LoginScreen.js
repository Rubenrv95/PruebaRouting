import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, createRef, useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'; 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const navigation = useNavigation()

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
      else {
        navigation.navigate("Login")
      }
    })

    return unsuscribe
  }, [])

  // en caso de que necesite registrar usuario
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Usuario contectado con el correo ' + user.email);
      })
      .catch(error => alert(error.message))
  }


  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');


  return (
    <View style={styles.container}>
      

      <Image source = {require("./images/logo.png")}/>
      <StatusBar style="auto"/>

      <View style={styles.VistaInput}>
        <TextInput style={styles.TextInput} placeholder="Correo" value={email} placeholderTextColor= "#707070"  onChangeText={text => setEmail(text)}/>
      </View>

      <View style={styles.VistaInput}>
        <TextInput style={styles.TextInput} placeholder="Contraseña" value={password} placeholderTextColor= "#707070"  secureTextEntry={true} onChangeText={text => setPassword(text)}/>
      </View>


      <View style={styles.VistaInput}>
        <TouchableOpacity onPress={handleLogin} style={styles.btn}>
            <Text style={styles.btnText}>Conectarse</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.VistaInput}>
        <Text style={styles.firmText}>Desarrollado por Rubén Ramírez 2022</Text>
      </View>
     
    </View>


  );
}

export default LoginScreen

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
      width: 200,
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
