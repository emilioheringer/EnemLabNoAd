import React from 'react';
import { View, StyleSheet, Text,  TouchableHighlight,ToastAndroid } from 'react-native';
import { useState } from 'react';
import auth from '@react-native-firebase/auth'

const AlterarSenha = (props) => {
    const [pressed, setPresses] = useState(false);
    const [text, setText] = useState('');
    const onPressButton = () => {
        setPresses(!pressed);

    }

    const onPressSalvar = () => {
        const user = auth().currentUser;
        const email = user.email;
        auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                ToastAndroid.show("Um email de redefinição de senha foi enviado!", ToastAndroid.SHORT);

                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const onChangeText = text => {
        setText(text)
    }

    return (
        <View style={styles.container} >
            {!pressed ? <TouchableHighlight underlayColor={'#ccc'} style={{ flex: 1, marginTop: 10 }} onPress={() => onPressSalvar()}><View style={{ marginLeft: 20 }}><Text >Senha</Text><Text style={{ color: '#b2a8a9' }}>Clique para alterar sua senha</Text></View></TouchableHighlight> :
                <View style={{ marginLeft: 20 }}><Text >Senha</Text><Text style={{ color: '#b2a8a9' }}>Um email de alteração de senha foi enviado</Text></View>
            }
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

export default AlterarSenha;