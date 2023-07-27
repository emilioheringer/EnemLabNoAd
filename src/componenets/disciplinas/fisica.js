import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TextButton from '../textButton';
import { createStackNavigator } from '@react-navigation/stack';
import filter from 'lodash.filter'
import SeeContent from '../seeContent';
import { Searchbar } from 'react-native-paper';
const data = require('../../data/conteudo.json');
const Stack = createStackNavigator();

const style1 = { backgroundColor: '#fff', borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20 };
const style2 = { fontSize: 20, };
const style3 = { width: 25, height: 25, marginTop: 18 };


export default function Fisica() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Fis' component={FisicaScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />

        </Stack.Navigator>
    );
}
function FisicaScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => setSearchQuery(query);
 

    const dat = [
        {
            id: '1', title: 'Cinemática', component: <TextButton text='Cinemática' image={require('../../assets/icons/physics.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.fisica.cinematica }) }
            }} style1={style1} style2={style2} style3={style3} /> 
                },
        {
            id: '2', title: 'Leis de Newton', component: <TextButton text='Leis de Newton' image={require('../../assets/icons/physics.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.fisica.newton }) }
            }} style1={style1} style2={style2} style3={style3} /> 
                },
        {
            id: '3', title: 'Energia e Trabalho', component: <TextButton text='Energia e Trabalho' image={require('../../assets/icons/physics.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.fisica.trabalho, videotoPlay: 'GbywMXWHS7E' })} style1={style1} style2={style2} style3={style3} /> 
                },
        {
            id: '4', title: 'Calorimetria', component: <TextButton text='Calorimetria' image={require('../../assets/icons/physics.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.fisica.calorimetria, videotoPlay: 'ScpYQh7NA' })} style1={style1} style2={style2} style3={style3} />
                
                },
        {
            id: '5', title: 'Termodinâmica', component: <TextButton text='Termodinâmica' image={require('../../assets/icons/physics.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.fisica.termodinamica }) }
            }} style1={style1} style2={style2} style3={style3} /> 
                },
     
        {
            id: '7', title: 'Hidrostática', component: <TextButton text='Hidrostática' image={require('../../assets/icons/physics.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.fisica.hidrostatica, videotoPlay: 'rEvuCN6wZc8' })} style1={style1} style2={style2} style3={style3} />
                
                },
        {
            id: '8', title: 'Ondas', component: <TextButton text='Ondas' image={require('../../assets/icons/physics.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.fisica.ondas, videotoPlay: 'rptdcS9HqPc' })} style1={style1} style2={style2} style3={style3} />
                
                },
        {
            id: '9', title: 'Acústica', component: <TextButton text='Acústica' image={require('../../assets/icons/physics.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.fisica.acustica, videotoPlay: '0mN_R0pBZqc' })} style1={style1} style2={style2} style3={style3} />
                
                },
        {
            id: '10', title: 'Eletrostática', component: <TextButton text='Eletrostática' image={require('../../assets/icons/physics.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.fisica.eletrostatica }) }
            }} style1={style1} style2={style2} style3={style3} /> 
                },
        {
            id: '11', title: 'Leis de Ohm', component: <TextButton text='Leis de Ohm' image={require('../../assets/icons/physics.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.fisica.ohm, videotoPlay: 'qQCEnluIids' })} style1={style1} style2={style2} style3={style3} />
                
                },
   
        {
            id: '13', title: 'Circuitos Elétricos', component: <TextButton text='Circuitos Elétricos' image={require('../../assets/icons/physics.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.fisica.circuitos }) }
            }} style1={style1} style2={style2} style3={style3} /> 
                },
        {
            id: '14', title: 'Força Magnética', component: <TextButton text='Força Magnética' image={require('../../assets/icons/physics.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.fisica.magnetica, videotoPlay: '0okeV_UvTb4' })} style1={style1} style2={style2} style3={style3} />
                
                },
        {
            id: '15', title: 'Espelhos e Lentes', component: <TextButton text='Espelhos e Lentes' image={require('../../assets/icons/physics.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.fisica.espelhos }) }
            }} style1={style1} style2={style2} style3={style3} /> 
                },

      
    ]

    const filteredData = dat.filter((dataItem) =>
    dataItem.title.toLowerCase().includes(searchQuery.toLowerCase())

);
const renderItem = ({ item }) => <View>{item.component}</View>;

return (
    <View style={styles.container}>
        <Searchbar
            style={{ borderWidth: 0.5, backgroundColor: 'white', borderColor: '#000', borderRadius: 20 }}
            placeholder="Pesquisa"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View>
                    {item.component}
                </View>
            )}
        />

    </View>
)
}





const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    //backgroundColor: 'rgb( 231, 237, 245)',
}
})