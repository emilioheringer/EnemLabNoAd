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

export default function Literatura(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Lit' component={LiteraturaScreen}/>
            <Stack.Screen name='Conteudo' component={SeeContent}/>

        </Stack.Navigator>
    );
}

function LiteraturaScreen({navigation}){
     const adUnitId = 'ca-app-pub-4345868011917274/2516104663'
     //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    return(
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <Pesquisador key={1}/>
            <TextButton key={2} text='Trovadorismo' image={require('../../assets/icons/literature.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.literatura.trovadorismo})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton key={3} text='Renascimento' image={require('../../assets/icons/literature.png')} onPress={() =>  navigation.navigate('Conteudo', {textForDisplay: data.literatura.renascimento})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton key={4} text='Barroco e Arcadismo' image={require('../../assets/icons/literature.png')} onPress={() =>  navigation.navigate('Conteudo', {textForDisplay: data.literatura.barroco})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton key={5} text='Romantismo' image={require('../../assets/icons/literature.png')} onPress={() =>  navigation.navigate('Conteudo', {textForDisplay: data.literatura.romantismo})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton key={6} text='Realismo e Naturalismo' image={require('../../assets/icons/literature.png')} onPress={() =>  navigation.navigate('Conteudo', {textForDisplay: data.literatura.realismo})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton key={7} text='Poesia, Poema e Prosa' image={require('../../assets/icons/literature.png')} onPress={() => navigation.navigate('Conteudo', {textForDisplay: data.literatura.poesia})} style1={style1} style2 ={style2} style3={style3}/>
            <TextButton key={8} text='Modernismo' image={require('../../assets/icons/literature.png')} onPress={() =>  navigation.navigate('Conteudo', {textForDisplay: data.literatura.modernismo})}style1={style1} style2 ={style2} style3={style3}/>
           
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