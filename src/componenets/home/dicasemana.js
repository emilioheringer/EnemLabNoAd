import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ToastAndroid } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

const Dica = (props) => {
    const [data, setData] = useState('');

    useEffect(() => {
        const subscriber = firestore().collection('dicadodia').doc('VsXELLouP5oiYuDnxN8x')
        .onSnapshot(
            documentSnapshot => {
                setData(documentSnapshot.data());
            }
        )
        return () => subscriber();
    },[])



    if (typeof data.dica === 'undefined') {
        return (<View><Text>Aguardando resposta do banco de dados</Text></View>)
    }
    const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    const renderizar = () => {
        let showResult = [];
        let result = data.dica.split(regex);
        //Vizualida text ou imagem dependendo do texto
        for (let i = 0; i < result.length; i++) {
            if (result[i].includes('https')) {
                showResult.push(<View style={{ flex: 1, marginTop: 10, height: 300 }} key={i} ><Image style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'contain' }} source={{ uri: result[i] }} /></View>);
            } else {
                showResult.push(<Text style={{ fontSize: 15, marginTop: 10, marginLeft: 15, marginRight: 15, textAlign: 'justify', color:'#000' }} key={i}>{result[i].replace('\\n', '\n').replace('\\n', '\n').replace('\\n', '\n').replace('\\n', '\n')}</Text>);
            }
        }
        console.log(result[5])
        return <ScrollView style={{ marginTop: 10, backgroundColor: '#fff' }} persistentScrollbar={true}>{showResult}</ScrollView>;
    }

    return (
        renderizar()
    )
}

export default Dica;

const styles = StyleSheet.create({
    radiobutton: {
        flex: 1,
        marginTop: 10,
    },
    btn: {
        backgroundColor: '#aedaff',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20

    },
    btn2: {
        backgroundColor: '#aedaff',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20

    },

})