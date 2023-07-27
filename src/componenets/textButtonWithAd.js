import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';


export default function TextButtonWithId(props) {
    const touchbleStyle = props.style1;
    const textStyleprops = props.style2;
    const imageStyleprops = props.style3;
    const [loaded, setLoaded] = useState(false);
 
    return (
        <TouchableHighlight style={[styles.touchblecontainer, touchbleStyle]} underlayColor='rgb( 33, 94, 185 )' onPress={() => {
            props.onPress
        }}>
            <View style={styles.viewContainer}>
                <View style={styles.container}>
                    <Image style={[styles.image, imageStyleprops]} source={props.image} />
                </View>
                <Text style={[styles.textStyle, textStyleprops]}>{props.text}</Text>
            </View>
        </TouchableHighlight>

    )
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        height: 60,
        //width: 50,
        marginLeft: 25,
    },

    image: {
        marginTop: 10,
        width: 40,
        height: 40,
    },

    viewContainer: {
        flexDirection: 'row',
        //marginTop: 20,
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',

    },

    textStyle: {
        marginLeft: 20,
        fontSize: 28,
        color: '#000000'
    },

    touchblecontainer: {
        borderRadius: 50,
        marginTop: 20,
        backgroundColor: 'rgb( 152, 193, 245 )',
    }

})