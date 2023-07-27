import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
//import Pergunta from '../../pergunta';
import TextButton from '../componenets/textButton';
import Pergunta from '../componenets/pergunta';
import Postar from '../componenets/comentarios/postar';
import Hud from '../componenets/comentarios/hud';
import { useState, useEffect} from 'react';
import NetInfo from "@react-native-community/netinfo";

const style1 = {backgroundColor: '#fff',  borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20};
const style2 = {fontSize: 25,};
const style3 = {width: 25, height: 25, marginTop: 18};
const Stack = createStackNavigator();

export default function Simular(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Simulado2' component={SimularScreen} />
        </Stack.Navigator>
    );
}

function SimularScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TextButton text='LINGUAGENS E SUAS TECNOLOGIAS' onPress={()=> navigation.navigate('Pergunta', {disciplina: 'Linguagens'})} image={require('../assets/icons/language.png')} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='CIÊNCIAS HUMANAS'  onPress={()=> navigation.navigate('Pergunta', {disciplina: 'Ciencias Humanas'})} image={require('../assets/icons/human.png')} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='CIÊNCIAS DA NATUREZA'  onPress={()=> navigation.navigate('Pergunta', {disciplina: 'Ciencias da Natureza'})} image={require('../assets/icons/nature.png')} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='MATEMÁTICA E SUAS TECNOLOGIAS' onPress={()=> navigation.navigate('Pergunta', {disciplina: 'Matematica'})} image={require('../assets/icons/math.png')} style1={style1} style2 ={style2} style3={style3}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        //backgroundColor: 'rgb( 231, 237, 245)',
    }
})