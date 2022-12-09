import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import {  ActivityIndicator, FlatList, StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'; 


const MapsScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

    //se obtienen a los marcadores de la api
    const getMaps = async () => {
        try {
        const response = await fetch('https://routing-c8875-default-rtdb.firebaseio.com/mapas.json');
        const json = await response.json();
        setData(json);
        console.log(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
   
   useEffect(() => {
     getMaps();
   }, []);

  return (
    <View style={styles.container}>

        <MapView
            style={styles.map}
            initialRegion={{
            latitude: -33.45694,
            longitude: -70.64827,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >

            
            {data.map(marker => ( //se posicionan todos los marcadores de la base de datos según las coordenadas correspondientes
                <Marker 
                key={marker.id}
                coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                }}
                title={"Titulo"}
                description={"Descripcion"}
                />
            ))}

        </MapView>
    </View>

  );
}

export default MapsScreen

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

  map: {
    width: '100%',
    height: '100%',
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
