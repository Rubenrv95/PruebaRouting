import React ,{ useEffect, useState }from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import { firebase } from '../firebase';

const UsersScreen = () => {

    const [users, setUsers] = useState([]);
    const usersRef = firebase.firestore().collection('users');
    
    const getUsers = async () => {
      usersRef
        .onSnapshot(
          querySnapshot => {
            const users = []
            querySnapshot.forEach((doc) => {
              const {username, email, created_at} = doc.data()
              users.push({
                id: doc.id,
                username,
                email,
                created_at,
              })
            })
            setUsers(users)
          }
        )
    }
    
      useEffect(() => {
        getUsers();
      }, []);

    return (
      <View style={{ flex: 1, padding: 24 }}>
        <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.btnText}>Añadir usuario</Text>
        </TouchableOpacity>
          <FlatList
            data={users}
            numColumns={1}
            renderItem={({item}) => (
              <Text>{item.username}  {item.email} </Text>
            )}
          />

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
    marginLeft: 240,
    width: 130,
    height: 40,
},

  btnText: {
      color: 'white',
  }
});
