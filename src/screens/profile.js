import React from 'react';
import {ScrollView, ToastAndroid} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Avatar from '../componenets/perfil/avatar';
import EditarDados from '../componenets/perfil/dados';
//Import Firebase
import auth from '@react-native-firebase/auth';

//Import Componenets
import TextButton from '../componenets/textButton';

const Stack = createStackNavigator();

const Profile = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Perfil2' component={PerfilScreen}/>
        </Stack.Navigator>
    );
}

const PerfilScreen = () => {
    const handleLogOut = () =>{
       auth().signOut().then(()=>ToastAndroid.show("Deslogado!", ToastAndroid.SHORT))
    }
    const navigation = useNavigation();

    const style1 = {backgroundColor: '#fff',  borderBottomColor: '#ccc', borderBottomWidth: 1, fontSize: 20};
    const style2 = {fontSize: 20,};
    const style3 = {width: 25, height: 25, marginTop: 18};
     //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    return(
    <ScrollView style={{backgroundColor: '#fff'}}>
        <Avatar key={0}/>
        <TextButton key={1} text='Editar Dados' onPress={()=> navigation.navigate('EditarDados')} image={require('../assets/icons/data.png')} style1={style1} style2 ={style2} style3={style3}/>
        <TextButton key={2} text='Segurança' onPress={()=> navigation.navigate('Seguranca')} image={require('../assets/icons/security.png')} style1={style1} style2 ={style2} style3={style3}/>
        <TextButton key={3} text='Política de Privacidade' onPress={()=> navigation.navigate('Politica')} image={require('../assets/icons/shield.png')} style1={style1} style2 ={style2} style3={style3}/>
        <TextButton key={5} text='Sair' onPress={handleLogOut} image={require('../assets/icons/logout.png')} style1={style1} style2 ={style2} style3={style3}/>
    </ScrollView>
    );
      
}

export default Profile;