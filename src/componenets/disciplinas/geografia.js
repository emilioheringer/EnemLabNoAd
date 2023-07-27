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


export default function Geografia() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Geo' component={GeografiaScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />

        </Stack.Navigator>
    );
}

function GeografiaScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => setSearchQuery(query);
  

    const dat = [
        {
            id: '1', title: 'Climas', component: <TextButton text='Climas' image={require('../../assets//icons/geography.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.geografia.climas }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '2', title: 'Acordo de París', component: <TextButton text='Acordo de París' image={require('../../assets//icons/geography.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.geografia.acordoparis }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '3', title: 'Aquecimento Global', component: <TextButton text='Aquecimento Global' image={require('../../assets/icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.aquecimento })} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '4', title: 'Bacias Hidrográficas', component: <TextButton text='Bacias Hidrográficas' image={require('../../assets/icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.bacias })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '5', title: 'Relevos', component: <TextButton text='Relevos' image={require('../../assets/icons/geography.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.geografia.relevos }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
      
        {
            id: '7', title: 'Biomas', component: <TextButton text='Biomas' image={require('../../assets//icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.bioma })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '8', title: 'Matriz de Transporte', component: <TextButton text='Matriz de Transporte' image={require('../../assets//icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.transporte })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '9', title: 'Fontes de Energia', component: <TextButton text='Fontes de Energia' image={require('../../assets/icons/geography.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.geografia.energia }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '10', title: 'Geografia Urbana', component: <TextButton text='Geografia Urbana' image={require('../../assets/icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.urbana })} style1={style1} style2={style2} style3={style3} />

        },
     
        {
            id: '12', title: 'Blocos Econômicos', component: <TextButton text='Blocos Econômicos' image={require('../../assets//icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.blocos })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '13', title: 'China', component: <TextButton text='China' image={require('../../assets//icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.china })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '14', title: 'Setores Econômicos', component: <TextButton text='Setores Econômicos' image={require('../../assets//icons/geography.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.geografia.setores }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '15', title: 'Questão Agrária', component: <TextButton text='Questão Agrária' image={require('../../assets/icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.agraria })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '16', title: 'Imperialismo', component: <TextButton text='Imperialismo' image={require('../../assets/icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.imperialismo })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '17', title: 'Conferência de Berlim', component: <TextButton text='Conferência de Berlim' image={require('../../assets/icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.conferencia })} style1={style1} style2={style2} style3={style3} />

        },
     
        {
            id: '19', title: 'Migração', component: <TextButton text='Migração' image={require('../../assets//icons/geography.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.geografia.migracao })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '20', title: 'Globalização', component: <TextButton text='Globalização' image={require('../../assets//icons/geography.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.geografia.globalizacao }) }
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