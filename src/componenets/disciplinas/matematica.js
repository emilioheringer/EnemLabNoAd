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

export default function Matematica() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Mat' component={MatematicaScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />
        </Stack.Navigator>
    );
}

function MatematicaScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    const dat = [
        {
            id: '1', title: 'Porcentagem', component:             <TextButton text='Porcentagem' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.porcentagem })} style1={style1} style2={style2} style3={style3} />

        },  
   {
            id: '2', title: 'Regra de Três', component: <TextButton text='Regra de Três' image={require('../../assets/icons/mathIcon.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.matematica.tres }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  

   {
            id: '3', title: 'Unidade de Medidas', component:             <TextButton text='Unidade de Medidas' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.medidas })} style1={style1} style2={style2} style3={style3} />

        },  

   {
            id: '4', title: 'Leitura de Gráficos', component:             <TextButton text='Leitura de Gráficos' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.graficos })} style1={style1} style2={style2} style3={style3} />

        },  

   {
            id: '5', title: 'Plano Cartesiano', component:             <TextButton text='Plano Cartesiano' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.plano })} style1={style1} style2={style2} style3={style3} />

        },  

   {
            id: '6', title: 'Equação de 1º Grau', component:             <TextButton text='Equação de 1º Grau' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.prigrau })} style1={style1} style2={style2} style3={style3} />

        },  

   {
            id: '7', title: 'Equação de 2º Grau', component:  <TextButton text='Equação de 2º Grau' image={require('../../assets/icons/mathIcon.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.matematica.segrau }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  

   {
            id: '8', title: 'Funções Exponenciais e Logarítimo', component:             <TextButton text='Funções Exponenciais e Logarítimo' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.expo })} style1={style1} style2={style2} style3={style3} />

        },  


   {
            id: '10', title: 'MMC e MDC', component: <TextButton text='MMC e MDC' image={require('../../assets/icons/mathIcon.png')} onPress={() => {
               { navigation.navigate('Conteudo', { textForDisplay: data.matematica.mmc }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  

   {
            id: '11', title: 'PA e PG', component:  <TextButton text='PA e PG' image={require('../../assets/icons/mathIcon.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.matematica.pa }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  
   {
            id: '12', title: 'Probabilidade', component:             <TextButton text='Probabilidade' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.probabilidade })} style1={style1} style2={style2} style3={style3} />

        },  
   {
            id: '13', title: 'Trigonometria', component:             <TextButton text='Trigonometria' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.trigonometria })} style1={style1} style2={style2} style3={style3} />

        },  
   {
            id: '14', title: 'Estatística', component:             <TextButton text='Estatística' image={require('../../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.matematica.estatistica })} style1={style1} style2={style2} style3={style3} />

        },  
   {
            id: '15', title: 'Geometria Analítica', component:  <TextButton text='Geometria Analítica' image={require('../../assets/icons/mathIcon.png')} onPress={() => {
                 { navigation.navigate('Conteudo', { textForDisplay: data.matematica.analitica }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  
 
   
    ];
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