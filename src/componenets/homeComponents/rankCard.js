import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
const RankCard = (props) => {
    const [rank, setRank] = useState(0);
    const [urlPhoto, setUrlPhoto] = useState('https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/istockphoto-587805156-612x612.jpg?alt=media&token=099b77a9-a34a-45e1-989f-761980c2944c');
    const [displayName, setDisplayName] = useState('Edite seu nome')
    const user = auth().currentUser;
    //const imagem = fetch(auth().currentUser.photoURL);
    // const displayName = user.displayName

    useEffect(() => {
        if (auth().currentUser.displayName !== null) {
            setDisplayName(auth().currentUser.displayName)
        }

        if (auth().currentUser.photoURL !== null) {
            setUrlPhoto(auth().currentUser.photoURL)
        }
    }, [displayName])

    useEffect(() => {
        const subscriber = firestore().collection('controlededisciplina').doc(auth().currentUser.uid)
            .onSnapshot(documentSnapshot => {
                if(documentSnapshot.exists){
                setRank(documentSnapshot.data().rank);
                }
            })
        return () => subscriber();
    }, [rank])

    //const getphotoId = async () => {
    //const photo = await fetch(`https://graph.facebook.com/me?access_token=${token}&field=picture`); 
    //setUrlPhoto(user.photoURL)
    // console.log(user.photoURL)
    //  }
    //getphotoId()
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, marginLeft: 20, marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, height: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image style={{ borderRadius: 25, height: 50, width: 50, backgroundColor: '#aedaff' }} source={{ uri: urlPhoto } /*require('../../assets/icons/home.png')*/} />
                <Text numberOfLines={1} ellipsizeMode='tail' style={{ width: '50%', marginLeft: 25, fontSize: 17, color:'#000' }}>{displayName}</Text>
            </View>
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginRight: 20 }}>
                <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('../../assets/icons/crown.png')} />
                <Text style={{ alignSelf: 'center', color:'#000' }} numberOfLines={1} ellipsizeMode='tail'>{rank}</Text>
            </View>


            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Perfil')}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Ver Perfil</Text>
            </TouchableOpacity >

        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#aedaff',
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        marginTop: 15,
        marginRight: 10,


    },
})

export default RankCard;