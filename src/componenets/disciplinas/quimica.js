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

export default function Quimica() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Qui' component={QuimicaScreen} />
            <Stack.Screen name='Conteudo' component={SeeContent} />

        </Stack.Navigator>
    );
}

function QuimicaScreen({ navigation }) {
    const [loaded, setLoaded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => setSearchQuery(query);


    const dat = [
        {
            id: '1', title: 'Ligações Químicas', component:<TextButton text='Ligações Químicas' image={require('../../assets/icons/chemistry.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.quimica.ligacoes }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  
  {
            id: '2', title: 'Forças Intermoleculares', component:            <TextButton text='Forças Intermoleculares' image={require('../../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.quimica.intermolecula })} style1={style1} style2={style2} style3={style3} />

        },  
  {
            id: '3', title: 'Química Inorgânica', component:            <TextButton text='Química Inorgânica' image={require('../../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.quimica.inorganica })} style1={style1} style2={style2} style3={style3} />

        },  
  {
            id: '4', title: 'Balanceamento de Equações', component:  <TextButton text='Balanceamento de Equações' image={require('../../assets/icons/chemistry.png')} onPress={() => {
               { navigation.navigate('Conteudo', { textForDisplay: data.quimica.balanceamento }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  
  {
            id: '5', title: 'Estequiometria', component: <TextButton text='Estequiometria' image={require('../../assets/icons/chemistry.png')} onPress={() => {
                { navigation.navigate('Conteudo', { textForDisplay: data.quimica.estequiometria }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  
  {
            id: '6', title: 'Soluções Químicas', component:            <TextButton text='Soluções Químicas' image={require('../../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.quimica.solucoes })} style1={style1} style2={style2} style3={style3} />

        },  
  {
            id: '7', title: 'Cinética Química', component:            <TextButton text='Cinética Química' image={require('../../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.quimica.cinetica })} style1={style1} style2={style2} style3={style3} />

        },  
  {
            id: '8', title: 'PH e POH', component: <TextButton text='PH e POH' image={require('../../assets/icons/chemistry.png')} onPress={() => {
                 { navigation.navigate('Conteudo', { textForDisplay: data.quimica.ph }) }
            }} style1={style1} style2={style2} style3={style3} />
        },  

  {
            id: '10', title: 'Termoquímica', component:<TextButton text='Termoquímica' image={require('../../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.quimica.termoquimica })} style1={style1} style2={style2} style3={style3} />
        },  
  {
            id: '11', title: 'Separação de Misturas', component:              <TextButton text='Separação de Misturas' image={require('../../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.quimica.misturas })} style1={style1} style2={style2} style3={style3} />
          

        },  
  {
            id: '12', title: 'Oxirredução', component:            <TextButton text='Oxirredução' image={require('../../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.quimica.oxirreducao })} style1={style1} style2={style2} style3={style3} />

        },  
  {
            id: '13', title: 'Eletroquímica', component:            <TextButton text='Eletroquímica' image={require('../../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Conteudo', { textForDisplay: data.quimica.eletroquimica })} style1={style1} style2={style2} style3={style3} />

        },  
  {
            id: '14', title: 'Química Orgânica', component: <TextButton text='Química Orgânica' image={require('../../assets/icons/chemistry.png')} onPress={() => {
                 { navigation.navigate('Conteudo', { textForDisplay: data.quimica.organica }) }
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