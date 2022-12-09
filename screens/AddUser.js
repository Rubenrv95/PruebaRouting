import React ,{ useEffect, useState }from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import { firebase } from '../firebase';
import { auth, db } from '../firebase';
import {ref, set} from 'firebase/database';
import { useNavigation } from '@react-navigation/core'; 


const AddUser = () => {


  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [created, setCreated] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  //funcion para registrar usuario en el auth
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(error => alert(error.message))
  }

  const validateInputs = event => {
      event.preventDefault();

      if(!email.trim()) {
        alert('Por favor ingrese un email');
        return;
      }

      if(!username.trim()) {
        alert('Por favor ingrese un nombre');
        return;
      }

      if(!password.trim()) {
        alert('Por favor ingrese un contraseña');
        return;
      }

      createUser();
  }
  //funcion para agregar usuario a la base de datos
  const createUser = async () => {

        try {
            var RandomNumber = Math.floor(Math.random() * 100) + 1 ; //generamos ID random
            const response = await fetch('https://routing-c8875-default-rtdb.firebaseio.com/users.json');
            const json = await response.json();
            const size = Object.keys(json).length;

            set(ref(db, 'users/' + size), {
              username: username,
              email: email,
              password: password,
              id: RandomNumber,
              created_at: new Date().toLocaleString()
            });
            handleSignUp(); //De paso, se registra al usuario
            alert("Usuario registrado con éxito!");
            return json.users;
        }
        catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
          }

  }


return (
    <View style={{ flex: 1, padding: 24 }}>
        <View style={styles.VistaInput}>
            <TextInput style={styles.TextInput} placeholder="Ingrese un nombre" value={username} placeholderTextColor= "#707070"  onChangeText={text => setUsername(text)}/>
        </View>

        <View style={styles.VistaInput}>
            <TextInput style={styles.TextInput}  placeholder="Ingrese un correo electrónico" value={email} placeholderTextColor= "#707070"  onChangeText={text => setEmail(text)}/>
        </View>

        <View style={styles.VistaInput}>
            <TextInput style={styles.TextInput} placeholder="Ingrese una contraseña" secureTextEntry={true}  value={password} placeholderTextColor= "#707070"  onChangeText={text => setPassword(text)}/>
        </View>


        <View style={styles.VistaInput}>
            <TouchableOpacity style={styles.btnAdd} onPress={validateInputs}>
                <Text style={styles.btnText}>Crear</Text>
            </TouchableOpacity>
        </View>
    </View>
);
};

export default AddUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextInput: {
      height: 50,
      width: 250,
      color: 'black',
      textAlign: 'center',
      backgroundColor: '#c9c9c9',
      borderRadius: 10,
  },

  VistaInput: {
      marginTop: 25,
      borderRadius: 10,
      alignItems: "center"
  },

  btnAdd: {
    backgroundColor: 'green',
    borderRadius: 6,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 100,
    width: 130,
    height: 40,
},

  btnText: {
      color: 'white',
  }
});
