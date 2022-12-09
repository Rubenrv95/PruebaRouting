import React ,{ useEffect, useState }from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import { firebase } from '../firebase';
import { useNavigation } from '@react-navigation/core'; 


const UsersScreen = () => {

  const navigation = useNavigation()

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  //Lleva al usuario a la vista para añadir usuarios
  const gotoAddUsers = () => {
    navigation.navigate("Añadir usuario")
 }

 //se obtienen a los usuarios de la API
  const getUsers = async () => {
     try {
      const response = await fetch('https://routing-c8875-default-rtdb.firebaseio.com/users.json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
    
    useEffect(() => {
      getUsers();
    }, []);

    return (
      <View style={{ flex: 1, padding: 24 }}>
      <TouchableOpacity style={styles.btnAdd} onPress={gotoAddUsers}>
            <Text style={styles.btnText}>Añadir usuario</Text>
        </TouchableOpacity>
      {isLoading ? <ActivityIndicator/> : ( //imprimimos a todos los usuarios de la base de datos en la lista
        <FlatList
          style={styles.lista} 
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.elementoLista}> {'Nombre:'} {item.username} {'\n'} {'Correo:'} {item.email} {'\n'} {'Fecha de creación:'} {item.created_at}</Text>
            
          )}
        />
      )}
    </View>
    );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextInput: {
      height: 50,
      width: 150,
      color: 'black',
      textAlign: 'center',
      backgroundColor: '#c9c9c9',
      borderRadius: 10,
  },

  lista: {
    textAlign: "center",
  },

  elementoLista: {
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 6,
  },

  VistaInput: {
      marginTop: 15,
      borderRadius: 10,
      alignItems: 'center',
  },

  btnAdd: {
    backgroundColor: 'green',
    borderRadius: 6,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: 30,
    marginLeft: 120,
    width: 130,
    height: 40,
},

  btnText: {
      color: 'white',
  }
});
