import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
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

export default function Filosofia(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Fil' component={FilosofiaScreen}/>
            <Stack.Screen name='Conteudo' component={SeeContent}/>

        </Stack.Navigator>
    );
}

function FilosofiaScreen({navigation}){
     const adUnitId = 'ca-app-pub-4345868011917274/1786311079'
     //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    return(
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <TextButton text='Filosofia Pré-Socrática' image={require('../../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.filosofia.filosofos})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Sócrates e seu legado' image={require('../../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.filosofia.socrates})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Platão e Aristóteles' image={require('../../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.filosofia.platao})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Filósofos Medievais' image={require('../../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.filosofia.medieval})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Renascimento' image={require('../../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.filosofia.renascimento})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Descartes e Bacon' image={require('../../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.filosofia.descartes})}style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Humanismo' image={require('../../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.filosofia.humanismo})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton text='Iluminismo' image={require('../../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.filosofia.iluminismo})} style1={style1} style2 ={style2} style3={style3}/>
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