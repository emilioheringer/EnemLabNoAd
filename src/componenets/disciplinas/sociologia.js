import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TextButton from '../textButton';
import SeeContent from '../seeContent';
import { useRoute } from '@react-navigation/native';
import Pesquisador from '../searchBar'
const Stack = createStackNavigator();
const data = require('../../data/conteudo.json');

const style1 = {backgroundColor: '#fff',  borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20};
const style2 = {fontSize: 20,};
const style3 = {width: 25, height: 25, marginTop: 18};

export default function Sociologia(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Soc' component={SociologiaScreen}/>
            <Stack.Screen name='Conteudo' component={SeeContent}/>
        </Stack.Navigator>
    );
}

function SociologiaScreen({navigation}){
     const adUnitId = 'ca-app-pub-4345868011917274/1931449601'
     //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    return(
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <TextButton text='Positivismo' image={require('../../assets/icons/sociology.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.sociologia.positivismo})}  style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Bauman' image={require('../../assets/icons/sociology.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.sociologia.bauman})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Foucault' image={require('../../assets/icons/sociology.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.sociologia.foucalt})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Cultura Material e Imaterial' image={require('../../assets/icons/sociology.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.sociologia.material})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Patrimônio Histórico' image={require('../../assets/icons/sociology.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.sociologia.patrimonio})}style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Movimentos Sociais' image={require('../../assets/icons/sociology.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.sociologia.movimentos})} style1={style1} style2 ={style2} style3={style3}/>
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