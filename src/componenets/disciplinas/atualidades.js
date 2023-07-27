import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TextButton from '../textButton';
import SeeContent from '../seeContent';
import { useRoute } from '@react-navigation/native';
import Pesquisador from '../searchBar'
const Stack = createStackNavigator();
const data = require('../../data/conteudo.json');

const style1 = { backgroundColor: '#fff', borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20 };
const style2 = { fontSize: 20 };
const style3 = { width: 25, height: 25, marginTop: 18 };

export default function Atualidades() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Atualidade' component={AtualidadesScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />
        </Stack.Navigator>
    );
}

function AtualidadesScreen({ navigation }) {
    //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    return (
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <TextButton text='Guerra Rússia x Ucrânia' image={require('../../assets/icons/news.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.atualidades.ucrania })} style1={style1} style2={style2} style3={style3} />
            <TextButton text='Fenômenos Climâticos no Brasil' image={require('../../assets/icons/news.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.atualidades.fenomenos })} style1={style1} style2={style2} style3={style3} />
            <TextButton text='Zona Convergência do Atlântico Sul' image={require('../../assets/icons/news.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.atualidades.zona })} style1={style1} style2={style2} style3={style3} />

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