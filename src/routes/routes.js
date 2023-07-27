import React from 'react';
import { StyleSheet, View, Text, Image, BackHandler } from 'react-native';

//Import navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import images icons
import Seguranca from '../componenets/perfil/seguranca';
import Recomendacoes from '../componenets/perfil/recomendacoes';
import Ajuda from '../componenets/perfil/ajuda';
import Politica from '../componenets/perfil/politica';
//Import das screens

import Dica from '../componenets/home/dicasemana';
import Estudar from '../screens/estudar';
import Profile from '../screens/profile';
import Simular from '../screens/simular';
import Home from '../screens/home'
import EditarDados from '../componenets/perfil/dados';
import ComoEstudar from '../componenets/home/comoestudar';
import Regras from '../componenets/home/regras';
import Pergunta from '../componenets/pergunta';
import Solucao from '../componenets/solucao';
import Conf from '../componenets/perfil/configuracoes';
import { color } from '@rneui/themed/dist/config';
import Postar from '../componenets/comentarios/postar';
import Hud from '../componenets/comentarios/hud';
import LerComentario from '../componenets/comentarios/lerComentario';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Navegador" component={Navegador} options={{ headerShown: false}}/>
                <Stack.Screen name="EditarDados" component={EditarDados} options={{title: false, headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name="Seguranca" component={Seguranca} options={{title: false, headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name="Recomendacoes" component={Recomendacoes} options={{title: 'Recomendações', headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name="Politica" component={Politica} options={{title: false, headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name="Ajuda" component={Ajuda} options={{title: 'Obter Ajuda', headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name="ComoEstudar" component={ComoEstudar} options={{title: 'Dicas de Estudo', headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name="Regras" component={Regras} options={{title: 'Regras', headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name="Solucao" component={Solucao} options={{title: 'Solução', headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name="Configuracoes" component={Conf} options={{title: 'Configurações', headerStyle:{backgroundColor: '#aedaff'}}} />
                <Stack.Screen name='Pergunta' component={Pergunta} options={{title: 'Simular', headerStyle:{backgroundColor: '#aedaff'}}} />       
                <Stack.Screen name='Dica' component={Dica} options={{title: 'Dica da Semana', headerStyle:{backgroundColor: '#aedaff'}}} />       
                <Stack.Screen name='Postar' component={Postar} options={{title: 'Faça uma pergunta', headerStyle:{backgroundColor: '#aedaff'}}} />       
                <Stack.Screen name='Hud' component={Hud} options={{title: 'Faça uma pergunta', headerStyle:{backgroundColor: '#aedaff'}}} />       
                <Stack.Screen name='LerComentario' component={LerComentario} options={{title: 'Pergunta', headerStyle:{backgroundColor: '#aedaff'}}} />       

            </Stack.Navigator>
        </NavigationContainer>


    );
}

function Navegador() {
    return (
        <Tab.Navigator screenOptions={{headerStyle:{backgroundColor: '#aedaff'}}}>
            <Tab.Screen name="Início" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5, }}>
                        <Image source={require('../assets/icons/home.png')} resizeMode='contain' style={styles.imageStyle} />
                    </View>
                )
            }} />
            <Tab.Screen  name="Estudo"  component={Estudar} options={
                
                {
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5, }}>
                            <Image source={require('../assets/icons/estudar.png')} resizeMode='contain' style={styles.imageStyle} />
                        </View>
                    ),
                    headerShown:false
                }
            }/>
            <Tab.Screen name="Simulado" component={Simular} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5, }}>
                        <Image source={require('../assets/icons/simulado.png')} resizeMode='contain' style={styles.imageStyle} />
                    </View>
                )
            }} />
            <Tab.Screen name="Perfil" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5, }}>
                        <Image source={require('../assets/icons/profile.png')} resizeMode='contain' style={styles.imageStyle} />
                    </View>
                )
            }} />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 25,
        height: 25,
    }
})
