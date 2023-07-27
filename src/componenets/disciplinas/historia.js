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

export default function Historia() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='His' component={HistoriaScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />

        </Stack.Navigator>
    );
}

function HistoriaScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    const dat = [
        {
            id: '1', title: 'Civilização Grega', component: <TextButton text='Civilização Grega' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.grego })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '2', title: 'Civilização Romana', component: <TextButton text='Civilização Romana' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.roma }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '3', title: 'Feudalismo', component: <TextButton text='Feudalismo' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.feudalismo }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '4', title: 'Absolutismo', component: <TextButton text='Absolutismo' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.absolutismo })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '5', title: 'Reforma Protestante', component: <TextButton text='Reforma Protestante' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.reforma })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '6', title: 'Revolução Francesa', component: <TextButton text='Revolução Francesa' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.revolucaofrancesa }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '7', title: 'Primeira Guerra Mundial', component: <TextButton text='Primeira Guerra Mundial' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.priguerra }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '8', title: 'Revolução Industrial', component: <TextButton text='Revolução Industrial' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.revolucaoindustrial }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '9', title: 'Revolução Industrial Inglesa', component: <TextButton text='Revolução Industrial Inglesa' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.revolucaoinglesa })} style1={style1} style2={style2} style3={style3} />

        },



        {
            id: '11', title: 'Revolução Russa', component: <TextButton text='Revolução Russa' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.revrussa })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '12', title: 'Totalitarismo', component: <TextButton text='Totalitarismo' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.totalitarismo })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '13', title: 'Segunda Guerra Mundial', component: <TextButton text='Segunda Guerra Mundial' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.segguerra }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '14', title: 'Guerra Fria', component: <TextButton text='Guerra Fria' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.guerrafria })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '15', title: 'Israel x Palestina', component: <TextButton text='Israel x Palestina' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.israelpalestina })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '16', title: 'Expansão Marítima', component: <TextButton text='Expansão Marítima' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.expansaomaritima }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '17', title: 'Brasil Colônia', component: <TextButton text='Brasil Colônia' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.colonia }) }
            }} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '18', title: 'Ciclo do Ouro', component: <TextButton text='Ciclo do Ouro' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.ouro })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '20', title: 'Revolução Americana', component: <TextButton text='Revolução Americana' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.americana })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '21', title: 'Brasil Império', component: <TextButton text='Brasil Império' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.braimperio })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '22', title: 'Período Regencial', component: <TextButton text='Período Regencial' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.regencial })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '23', title: 'Independência', component: <TextButton text='Independência' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.regencial }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '24', title: 'Brasil República', component: <TextButton text='Brasil República' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.republica })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '25', title: 'Guerra de Canudos', component: <TextButton text='Guerra de Canudos' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.canudos })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '26', title: 'República Velha', component: <TextButton text='República Velha' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.velha })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '27', title: 'Era Vargas', component: <TextButton text='Era Vargas' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.vargas }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '28', title: 'Revolta da Vacina', component: <TextButton text='Revolta da Vacina' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.vacina })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '29', title: 'Governo Constitucional', component: <TextButton text='Governo Constitucional' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.constitucional })} style1={style1} style2={style2} style3={style3} />

        },

        {
            id: '30', title: 'Estado Novo', component: <TextButton text='Estado Novo' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.novo })} style1={style1} style2={style2} style3={style3} />

        },
        {
            id: '31', title: 'Ditadura Militar', component: <TextButton text='Ditadura Militar' image={require('../../assets/icons/history.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.historia.ditadura }) }
            }} style1={style1} style2={style2} style3={style3} />
        },

        {
            id: '32', title: 'América Latina', component: <TextButton text='América Latina' image={require('../../assets/icons/history.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.historia.latina })} style1={style1} style2={style2} style3={style3} />

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