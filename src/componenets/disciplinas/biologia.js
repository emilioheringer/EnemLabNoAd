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


export default function Biologia() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Bio' component={BiologiaScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />
        </Stack.Navigator>
    );
}

function BiologiaScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => setSearchQuery(query);


    const dat = [
        {
            id: '1', title: 'citologia', component: <TextButton text='Citologia' image={require('../../assets/icons/biology.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.biologia.citologia }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '2', title: 'dna rna', component: <TextButton text='DNA e RNA' image={require('../../assets/icons/biology.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.biologia.rna }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '3', title: 'celulas tronco', component: <TextButton text='Células Tronco' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.celulastronco })} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '4', title: 'leis de mendel', component: <TextButton text='Leis de Mendel' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.mendel })} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '5', title: 'Grupos sanguineos ', component: <TextButton text='Grupos Sanguíneos' image={require('../../assets/icons/biology.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.biologia.grupossanguineos }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '6', title: 'imunologia', component: <TextButton text='Imunologia' image={require('../../assets/icons/biology.png')} onPress={() => {
               { navigation.navigate('Conteudo', { textForDisplay: data.biologia.imunologia }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '7', title: 'ciclos biogeoquimicos', component: <TextButton text='Ciclos Biogeoquímicos' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.biogeoquimicos })} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '8', title: 'Teoria da evolucao', component: <TextButton text='Evolução' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.evolucao })} style1={style1} style2={style2} style3={style3} />
        },
     
        {
            id: '10', title: 'poluicao', component: <TextButton text='Poluição' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.poluicao })} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '11', title: 'vertebrados', component: <TextButton text='Vertebrados' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.vertebrados })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '12', title: 'parasitismo', component: <TextButton text='Parasitismo' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.parasitismo })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '13', title: 'Bacterias e virus', component: <TextButton text='Fungos, Bactérias e Vírus' image={require('../../assets/icons/biology.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.biologia.fungi }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '14', title: 'Sistema Digestivo', component: <TextButton text='Sistema Digestivo' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.digestivo })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '15', title: 'Sistema Respiratorio', component: <TextButton text='Sistema Respiratório' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.respiratorio })} style1={style1} style2={style2} style3={style3} />


        },
        {
            id: '16', title: 'Sistema Reprodutor', component: <TextButton text='Sistema Reprodutor' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.reprodutor })} style1={style1} style2={style2} style3={style3} />


        },
        {
            id: '17', title: 'Sistema Nervoso', component: <TextButton text='Sistema Nervoso' image={require('../../assets/icons/biology.png')} onPress={() => {
                 { navigation.navigate('Conteudo', { textForDisplay: data.biologia.nervoso }) }
            }} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '18', title: 'Sistema Circulatorio', component: <TextButton text='Sistema Circulatório' image={require('../../assets/icons/biology.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.biologia.circulatorio })} style1={style1} style2={style2} style3={style3} />


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