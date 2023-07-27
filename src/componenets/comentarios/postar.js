import React from "react";
import { View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Image, Text, ToastAndroid } from 'react-native';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import uuid from 'react-native-uuid';
//import Hud from "./hud";
const Postar = (props) => {
    const [open, setOpen] = useState(true);
    const [pergunta, setPergunta] = useState('');
    const [typing, setTyping] = useState('');
    const [assunto, setAssunto] = useState('');
    const navigation = useNavigation();


    const data = () => {
        const id = uuid.v4();
        const reference = database().ref('/hudComentarios/pergunta').push();
        reference.set({
            assunto: assunto,
            pergunta: pergunta,
            uid: auth().currentUser.uid,
            nome: auth().currentUser.displayName,
            photo: auth().currentUser.photoURL,

        })
    }

    const ButtonPress = () => {
        if (assunto !== '' && pergunta !== '') {
            data();
            setOpen(true)
            navigation.goBack();
        } else {
            ToastAndroid.show("Para postar, digite o assunto e a aergunta primeiro", ToastAndroid.SHORT)
        }
    }



    if (open) {
        return (
            <KeyboardAvoidingView keyboardVerticalOffset={-220} behavior='padding' style={styles.open}>
                <View style={styles.assunto}>
                    <TextInput maxLength={50} onPressIn={() => setTyping('Digitando Assunto...')} onChangeText={(text) => setAssunto(text)} style={styles.textinput} placeholder="Digite o contexto da pergunta"></TextInput>
                </View>
                <View style={styles.textcontainer}>
                    <TextInput onPressIn={() => setTyping('Digitando Pergunta...')} onChangeText={(text) => setPergunta(text)} style={styles.textinput} placeholder="Digite sua Pergunta"></TextInput>
                </View>
                <View style={styles.comentbar}>
                    <Text>{typing}</Text>
                    <TouchableOpacity onPress={() => ButtonPress()}>
                        <Image style={{ height: 30, width: 30, margin: 20 }} source={require('../../assets/icons/send.png')} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }

    return (
        <TouchableOpacity onPress={() => setOpen(true)}>
            <View style={styles.notopen}>
                <Text style={{ margin: 10 }}>Clique para escrever uma pergunta</Text>
            </View>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    open: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor:'white'

    },

    textinput: {
        margin: 10,
        fontSize: 15,
        backgroundColor:'white'
    },

    notopen: {
        height: 60,
        borderWidth: 0.2,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center'
        
    },

    comentbar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 50,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 5,
        borderWidth: 0.2,
        
    },

    textcontainer: {
        flex: 1,
        borderWidth: 0.2,
        borderRadius: 1,
        margin: 10
    },
    assunto: {
        //flex: 1,
        borderWidth: 0.2,
        borderRadius: 1,
        margin: 10,
        height: 60,
        backgroundColor:'white'
    }
})


export default Postar;