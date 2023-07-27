import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//Imports do firebase
import auth from '@react-native-firebase/auth';
import mobileAds from 'react-native-google-mobile-ads';
//Import screens
import Routes from './src/routes/routes';
import NetInfo from "@react-native-community/netinfo";
//Import componenets
import Login from './src/login/login';
import Estudar from './src/screens/estudar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  //State loading
  const [initializing, setInitializing] = useState(true);
  const [internet, setInternet] = useState(true);
  const [user, setUser] = useState();
  //Configurações do firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCt9tv_30AupqQ6Bemu0JT0YJ2d0_Tu_aU",
    authDomain: "enem-8afd6.firebaseapp.com",
    databaseURL: "https://enem-8afd6-default-rtdb.firebaseio.com",
    projectId: "enem-8afd6",
    storageBucket: "enem-8afd6.appspot.com",
    messagingSenderId: "867893303717",
    appId: "1:867893303717:web:4a19e971ebb5c44fa8f04c",
    measurementId: "G-QWPQP7E346"
  };




  const Stack = createNativeStackNavigator();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setInternet(state.isConnected);
    });

    // Unsubscribe

  }, [internet])

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])

  if (initializing) return null;

  if (!internet) {
    return (
      <SafeAreaProvider>
        <View style={{ marginTop:200, alignSelf:'center', alignContent:'center', alignItems:'center', flex:1 }}>
          <Text style={{color:'#000'}}>Sem conexão. Verifique sua conexão com a internet!</Text>
          <View style={{alignContent:'center', alignItems:'center'}}>
            <Image style={{ height: 100, width: 100, marginLeft:5, margin:20 }} source={require('./src/assets/images/loading.gif')} />
            <Text style={{color:'#000'}}>Esperando!</Text>
          </View>
        </View>
      </SafeAreaProvider>

    )
  }

  if (!user) {
    return (
      <SafeAreaProvider>
        <Login />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
