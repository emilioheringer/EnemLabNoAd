import React from 'react';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    TextInput
} from 'react-native';
import filter from 'lodash.filter';
import { createStackNavigator } from '@react-navigation/stack';
import TextButton from '../componenets/textButton'
//Import disciplinas
import Portugues from '../componenets/disciplinas/portugues'
import Literatura from '../componenets/disciplinas/literatura';
import Geografia from '../componenets/disciplinas/geografia';
import Historia from '../componenets/disciplinas/historia';
import Biologia from '../componenets/disciplinas/biologia';
import Fisica from '../componenets/disciplinas/fisica';
import Quimica from '../componenets/disciplinas/quimica';
import Matematica from '../componenets/disciplinas/matematica';
import Filosofia from '../componenets/disciplinas/filosofia';
import Sociologia from '../componenets/disciplinas/sociologia';
import Pesquisador from '../componenets/searchBar'
import Ingles from '../componenets/disciplinas/ingles';
import Redacao from '../componenets/disciplinas/redacao';
import Atualidades from '../componenets/disciplinas/atualidades';
const Stack = createStackNavigator();
const style1 = { backgroundColor: '#fff', borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20 };
const style2 = { fontSize: 25, };
const style3 = { width: 25, height: 25, marginTop: 18 };




const Estudar = () => {

    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#aedaff' } }}>
            <Stack.Screen name='Estudar' component={EstudarScreen} />
            <Stack.Screen name='Portugues' component={Portugues} />
            <Stack.Screen name='Literatura' component={Literatura} />
            <Stack.Screen name='Redacao' component={Redacao} />
            <Stack.Screen name='Inglés' component={Ingles} />
            <Stack.Screen name='Geografia' component={Geografia} />
            <Stack.Screen name='Historia' component={Historia} />
            <Stack.Screen name='Biologia' component={Biologia} />
            <Stack.Screen name='Fisica' component={Fisica} />
            <Stack.Screen name='Quimica' component={Quimica} />
            <Stack.Screen name='Matematica' component={Matematica} />
            <Stack.Screen name='Filosofia' component={Filosofia} />
            <Stack.Screen name='Sociologia' component={Sociologia} />
            <Stack.Screen name='Atualidades' component={Atualidades} />
        </Stack.Navigator>
    )
}



function EstudarScreen({ navigation }) {
    //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => setSearchQuery(query);


    const data = [
        {
            id: '1', title: 'portugues', component: <TextButton text='PORTUGUÊS' image={require('../assets/icons/open-book.png')} onPress={() => navigation.navigate('Portugues')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '2', title: 'literatura', component: <TextButton text='LITERATURA' image={require('../assets/icons/literature.png')} onPress={() => navigation.navigate('Literatura')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '3', title: 'redacao', component: <TextButton text='REDAÇÃO' image={require('../assets/icons/redaction.png')} onPress={() => navigation.navigate('Redacao')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '4', title: 'ingles', component: <TextButton text='INGLÊS' image={require('../assets/icons/eng.png')} onPress={() => navigation.navigate('Inglés')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '5', title: 'geografia', component: <TextButton text='GEOGRAFÍA' image={require('../assets/icons/geography.png')} onPress={() => navigation.navigate('Geografia')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '6', title: 'historia', component: <TextButton text='HISTÓRIA' image={require('../assets/icons/history.png')} onPress={() => navigation.navigate('Historia')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '7', title: 'atualidades', component: <TextButton text='ATUALIDADES' image={require('../assets/icons/news.png')} onPress={() => navigation.navigate('Atualidades')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '8', title: 'biologia', component: <TextButton text='BIOLOGIA' image={require('../assets/icons/biology.png')} onPress={() => navigation.navigate('Biologia')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '9', title: 'fisica', component: <TextButton text='FÍSICA' image={require('../assets/icons/physics.png')} onPress={() => navigation.navigate('Fisica')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '10', title: 'quimica', component: <TextButton text='QUÍMICA' image={require('../assets/icons/chemistry.png')} onPress={() => navigation.navigate('Quimica')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '11', title: 'matematica', component: <TextButton text='MATEMÁTICA' image={require('../assets/icons/mathIcon.png')} onPress={() => navigation.navigate('Matematica')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '12', title: 'filosofia', component: <TextButton text='FILOSOFIA' image={require('../assets/icons/filosophy.png')} onPress={() => navigation.navigate('Filosofia')} style1={style1} style2={style2} style3={style3} />
        },
        {
            id: '13', title: 'sociologia', component: <TextButton text='SOCIOLOGIA' image={require('../assets/icons/sociology.png')} onPress={() => navigation.navigate('Sociologia')} style1={style1} style2={style2} style3={style3} />
        },
       
    ];
    const filteredData = data.filter((dataItem) =>
        dataItem.title.toLowerCase().includes(searchQuery.toLowerCase())

    );
    const renderItem = ({ item }) => <View>{item.component}</View>;
    return (
        <View style={styles.container}>
            <Searchbar
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
    },
    listItem: {
        marginTop: 10,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%'
    },
    listItemText: {
        fontSize: 18
    }
})

export default Estudar;