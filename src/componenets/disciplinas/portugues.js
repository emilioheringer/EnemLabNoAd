import React, { useState, useEffect} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TextButton from '../textButton';
import SeeContent from '../seeContent';
import { useRoute } from '@react-navigation/native';
import Pesquisador from '../searchBar'
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';
const data = require('../../data/conteudo.json');
const Stack = createStackNavigator();

const style1 = { backgroundColor: '#fff', borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20 };
const style2 = { fontSize: 20, };
const style3 = { width: 25, height: 25, marginTop: 18 };
const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-4345868011917274/1134207404', {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['education', 'amazon', 'dell', 'education', 'educação'],
});
export default function Portugues() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Por' component={PortuguesScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />

        </Stack.Navigator>
    );
}

function PortuguesScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, ()=>{
   
        })

        interstitial.load();

       return ()=> unsubscribe();
    },[])
    const adUnitId = 'ca-app-pub-4345868011917274/1134207404'
    //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    return (
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <Pesquisador />
            <TextButton text='Funções da Linguagem' image={require('../../assets/icons/open-book.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.portugues.funcoes })} style1={style1} style2={style2} style3={style3} />
            <TextButton text='Figuras de Linguagem' image={require('../../assets/icons/open-book.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.portugues.figuras })} style1={style1} style2={style2} style3={style3} />
            <TextButton text='Variações Linguisticas' image={require('../../assets/icons/open-book.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.portugues.variacoes })} style1={style1} style2={style2} style3={style3} />
            <TextButton text='Gêneros Textuais' image={require('../../assets/icons/open-book.png')} onPress={() => {
                 { navigation.navigate('Conteudo', { textForDisplay: data.portugues.generos }) }
            }} style1={style1} style2={style2} style3={style3} />
            <TextButton text='Intertextualidade' image={require('../../assets/icons/open-book.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.portugues.inter })} style1={style1} style2={style2} style3={style3} />
            <TextButton text='Semântica' image={require('../../assets/icons/open-book.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.portugues.semantica })} style1={style1} style2={style2} style3={style3} />
            
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