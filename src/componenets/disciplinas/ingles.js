import React from 'react';
import {ScrollView, StyleSheet,View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TextButton from '../textButton';
import SeeContent from '../seeContent';
import { useRoute } from '@react-navigation/native';
import Pesquisador from '../searchBar'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const data = require('../../data/conteudo.json');

const Stack = createStackNavigator();

const style1 = {backgroundColor: '#fff',  borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20};
const style2 = {fontSize: 20,};
const style3 = {width: 25, height: 25, marginTop: 18};

export default function Ingles(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Ing' component={InglesScreen}/>
            <Stack.Screen name='Conteudo' component={SeeContent}/>

        </Stack.Navigator>
    );
}
function InglesScreen({navigation}){
     const adUnitId = 'ca-app-pub-4345868011917274/9806594256'
     //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    return(
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <Pesquisador/>
            <TextButton text='Many e Much' image={require('../../assets/icons/eng.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.ingles.much, videotoPlay: 'CevCrMkUwR4'})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='How long e How Many' image={require('../../assets/icons/eng.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.ingles.how, videotoPlay: 'CevCrMkUwR4'})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Uso de quantifiers' image={require('../../assets/icons/eng.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.ingles.quantifiers, videotoPlay: 'CevCrMkUwR4'})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Tempos Verbais' image={require('../../assets/icons/eng.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.ingles.tempos, videotoPlay: 'CevCrMkUwR4'})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Voz Passiva' image={require('../../assets/icons/eng.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.ingles.passiva, videotoPlay: 'CevCrMkUwR4'})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Conectivos/Links' image={require('../../assets/icons/eng.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.ingles.links, videotoPlay: 'CevCrMkUwR4'})} style1={style1} style2 ={style2} style3={style3}/>
            
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