import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TextButton from '../textButton';
import SeeContent from '../seeContent';
import { useRoute } from '@react-navigation/native';
import Pesquisador from '../searchBar'
const data = require('../../data/conteudo.json');

const Stack = createStackNavigator();

const style1 = { backgroundColor: '#fff', borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20 };
const style2 = { fontSize: 20, };
const style3 = { width: 25, height: 25, marginTop: 18 };

export default function Redacao() {
        const [loaded, setLoaded] = useState(false);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Red' component={RedacaoScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />

        </Stack.Navigator>
    );
}
function RedacaoScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);

 
    return (
        <ScrollView style={styles.container} persistentScrollbar={true}>
            <Pesquisador />
            <TextButton text='Dissertação' image={require('../../assets/icons/redaction.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.redacao.dissetacao, videotoPlay: 'CevCrMkUwR4' }) }
            }} style1={style1} style2={style2} style3={style3} />


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