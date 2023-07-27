import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, ToastAndroid } from 'react-native';
import { useState } from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


const CardToEdit = (props) => {
    const [pressed, setPresses] = useState(false);
    const [text, setText] = useState('');
    const onPressButton = () => {
        setPresses(!pressed);
    }

    const onPressSalvar = async () => {
        const user = auth().currentUser;
        if (text !== '') {
            if (props.nome.includes('Usuário')) {
                console.log(text)
                await auth().currentUser.updateProfile({
                    displayName: text
                })
               firestore().collection('usuarios').doc(auth().currentUser.uid).update({
                   displayName: text
               })
               .then(() => {                   
                  //  console.log(text)
                    setPresses(!pressed);
                    ToastAndroid.show("Nome de usuário atualizado com sucesso!", ToastAndroid.SHORT);
                })
            }
            if (props.nome.includes('Nome')) {
              
                 firestore().collection('usuarios').doc(auth().currentUser.uid).update({
                   name: text
               })
               .then(() => {                   
                  //  console.log(text)
                    setPresses(!pressed);
                    ToastAndroid.show("Nome de usuário atualizado com sucesso!", ToastAndroid.SHORT);
                }).catch((error) => {
                    
                });

             }
            if (props.nome.includes('Sobrenome')) {
              
                firestore().collection('usuarios').doc(auth().currentUser.uid).update({
                    sobrenome: text
                })
                .then(() => {                   
                   //  console.log(text)
                     setPresses(!pressed);
                     ToastAndroid.show("Sobrenome atualizado com sucesso!", ToastAndroid.SHORT);
                 }).catch((error) => {
                     
                 });
 
            }
            if (props.nome.includes('Telefone')) {
              
                firestore().collection('usuarios').doc(auth().currentUser.uid).update({
                    telefone: text
                })
                .then(() => {                   
                   //  console.log(text)
                     setPresses(!pressed);
                     ToastAndroid.show("Telefone atualizado com sucesso!", ToastAndroid.SHORT);
                 }).catch((error) => {
                     
                 });
 
             }
             if (props.nome.includes('Pontos')) {
                firestore().collection('usuarios').doc(auth().currentUser.uid).update({
                    meta: text
                })
                .then(() => {                   
                   //  console.log(text)
                     setPresses(!pressed);
                     ToastAndroid.show("Meta atualizado com sucesso!", ToastAndroid.SHORT);
                 }).catch((error) => {
                     
                 });
 
             }
            if (props.nome.includes('mail')) {
              await auth().currentUser.updateEmail(email)
               auth().currentUser.updateEmail(text).then(() => {
                    setPresses(!pressed)
                ToastAndroid.show("Email atualizado com sucesso!", ToastAndroid.SHORT);
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });                
            }

        }

    }

    const onChangeText = text => {
        setText(text)
    }

    return (
        <View style={styles.container} >
            {!pressed ? <TouchableHighlight underlayColor={'#ccc'} style={{ flex: 1, marginTop: 10 }} onPress={() => onPressButton()}><View style={{ marginLeft: 20 }}><Text >{props.nome}</Text><Text style={{ color: '#b2a8a9' }}>Clique para editar o {props.nome}</Text></View></TouchableHighlight> :
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput style={{ marginLeft: 20, flex: 1,  }} placeholderTextColor='#ccc' placeholder={'Digite o ' + props.nome} onChangeText={text => onChangeText(text)}>
                    </TextInput>
                    <TouchableOpacity style={styles.btn} onPress={() => onPressSalvar()}>
                        <Text style={{ padding: 2, alignSelf: 'center', marginTop: 2, color:'#FFF' }}>Salvar</Text>
                    </TouchableOpacity>
                </View>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 70,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#ccc',
        justifyContent: 'center'
    },
    btn: {
        marginRight: 20,
        backgroundColor: '#aedaff',
        borderRadius: 5,
        width: 60,
        height: 30,
    },
})

export default CardToEdit;