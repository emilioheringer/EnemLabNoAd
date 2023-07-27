import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CompleteCard from '../componenets/homeComponents/completeCard';
import RankCard from '../componenets/homeComponents/rankCard'
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
const Stack = createStackNavigator();


export default function Home() {
    useEffect(() => {
        firestore().collection('usuarios').doc(auth().currentUser.uid).get()
            .then(
                documentSnapshot => {
                    if (!documentSnapshot.exists) {
                        dataCreation();
                    }
                }
            )

    }, [])



    const dataCreation = () => {
        firestore().collection('usuarios').doc(auth().currentUser.uid).set(
            {
                displayName: '',
                email: auth().currentUser.email,
                meta: '',
                name: '',
                perfilOculto: false,
                photo: 'https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/profile.png?alt=media&token=e01eabe5-5101-4171-b572-f16718ce1316',
                sobrenome: '',
                telefone: '',
                uid: auth().currentUser.uid
            }
        )
        firestore().collection('controleusuario').doc(auth().currentUser.uid).set(
            {
                heart: '5',
                rank: '0',
                uid: auth().currentUser.uid
            }
        )
        firestore().collection('controlededisciplina').doc(auth().currentUser.uid).set(
            {
                heart: '5',
                rank: 0,
                uid: auth().currentUser.uid,
                humanas: 1,
                linguagem: 1,
                matematica: 1,
                natureza: 1

            }
        )
    }
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Início2' component={HomeScreen} />
        </Stack.Navigator>

    );
}


function HomeScreen(props) {
    const [loaded, setLoaded] = useState(false);

    //const adUnitId = 'ca-app-pub-4345868011917274/9488947401'

    const user = auth().currentUser;
    useEffect(() => {

    }, [])

    {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                <RankCard key={1} />
                <View key={2} style={{ marginTop: 30, marginBottom: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        { { props.navigation.navigate('Dica') } }
                    }}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Dica da Semana</Text>
                    </TouchableOpacity >
                </View>
                <View key={3} style={{ flex: 1, marginTop: 10, height: 300 }} ><Image style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'contain' }} source={require('../assets/images/graph.png')} /></View>
                <View key={4} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginLeft: 10 }}>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('Regras')}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Regras</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('ComoEstudar')}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Como estudar?</Text>
                    </TouchableOpacity >
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#aedaff',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        marginTop: 20,
        marginEnd: 10

    },



})
