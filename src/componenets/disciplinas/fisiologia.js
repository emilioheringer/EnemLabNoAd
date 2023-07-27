import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TextButton from '../../../textButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();
const data = require('../../data/conteudo.json');

const style1 = {backgroundColor: '#fff',  borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20};
const style2 = {fontSize: 20,};
const style3 = {width: 25, height: 25, marginTop: 18};

export default function Fisiologia(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Fisio' component={Fisiologia}/>
        </Stack.Navigator>
    );
}

function FisiologiaScreen(){
    return(
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <TextButton text='Trovadorismo' image={require('../../assets/icons/literature.png')} onPress={() => navigation.navigate()} style1={style1} style2 ={style2} style3={style3}/>
        
         </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //backgroundColor: 'rgb( 231, 237, 245)',
    }
})