import { color } from '@rneui/base';
import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const HomeRankCard = (props) => {
    const icon = props.icon;
    const image = props.image
    return (
        <View style={{marginTop: 40, marginLeft: 20, height: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{ marginLeft: 10, height: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image style={{borderRadius:20, height: 40, width: 40, backgroundColor:'#aedaff' }} source={{uri: image}} />
                <Text style={{ marginLeft: 25, color:'000'}}>{props.nome}</Text>
            </View>
            <View style={{marginRight:10, height: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image style={{ height: 40, width: 40, marginRight:5 }} source={icon}/>
                 <Text style={{ marginRight: 10, color:'#000'}}> {props.ponto}</Text>
            </View>
            

        </View>
    )

}

export default HomeRankCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})