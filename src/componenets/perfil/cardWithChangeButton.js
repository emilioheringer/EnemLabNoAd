import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, ToastAndroid } from 'react-native';
import { useState } from 'react';


const CardWithChangeButton = (props) => {
    const [pressed, setPresses] = useState(props.pressed);
    const [text, setText] = useState('');
    //const [pressButton, setPressButton] = useState('');
    const pressButton = StyleSheet.create({
        container: {
            alignSelf: 'center',
            marginRight: 10,
            width: 70,
            height: 30,
            backgroundColor: '#e0dddd',
            borderRadius: 30,

        },
        pressConteiner: {
            margin: 5,
            marginLeft:8,
            width: 35,
            height: 20,
            backgroundColor: '#ccc',
            borderRadius: 30
        },
        onPressedContainer: {
            margin: 5,
            marginLeft: 25,
            width: 35,
            height: 20,
            backgroundColor: '#0d62b1',
            borderRadius: 30
        }
    })
    const onPressButton = () => {        
        setPresses(!pressed);
        /*const auth = getAuth();
        const user = auth.currentUser;
        const db = getFirestore(app);
        await updateDoc(doc(db, 'usuarios', user.uid), {
            perfilOculto: pressed
        })*/
    }

    useEffect(()=>{
        //setPresses()
    },[])

    return (

        <View style={styles.container} >
            {!pressed ?
                <TouchableHighlight underlayColor={'#ccc'} style={{ flex: 1, marginTop: 10 }} onPress={() => onPressButton()}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginLeft: 15 }}>
                            <Text >{props.nome}</Text>
                            <Text style={{ color: '#b2a8a9' }}>{props.message}</Text>
                        </View>
                        <View style={pressButton.container}>
                            <View style={pressButton.pressConteiner}></View>
                        </View>
                    </View>
                </TouchableHighlight> :
                <TouchableHighlight underlayColor={'#ccc'} style={{ flex: 1, marginTop: 10 }} onPress={() => onPressButton()}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginLeft: 15 }}>
                            <Text >{props.nome}</Text>
                            <Text style={{ color: '#b2a8a9' }}>{props.message}</Text>
                        </View>
                        <View style={pressButton.container}>
                            <View style={pressButton.onPressedContainer}></View>
                        </View>
                    </View>
                </TouchableHighlight>}
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

export default CardWithChangeButton;