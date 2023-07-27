
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';


const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-4345868011917274/3132463554', {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['education', 'amazon', 'dell', 'education', 'educação'],
});
export default function Solucao(props) {
    const [loaded, setLoaded] = useState(false);


    const conditionalRender = () => {
        const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
        const textForDisplay = props.route.params.textForDisplay.solucao;
        let showResult = [];
        let result = textForDisplay.split(regex);
        showResult.push(<Text key={'solucao'} style={{ marginTop: 10, fontSize: 20, marginLeft: 12 }}>Solução</Text>)

        for (let i = 0; i < result.length; i++) {
            if (result[i].includes('https')) {
                showResult.push(<View style={{ flex: 1, marginTop: 10, height: 300 }} key={i} ><Image style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'contain' }} source={{ uri: result[i] }} /></View>);
            } else {
                showResult.push(<Text selectable={true} style={{ fontSize: 15, marginTop: 10, marginLeft: 15, marginRight: 15, textAlign: 'justify', color: '#000000' }} key={i}>{result[i]}</Text>);
            }
        }

        showResult.push(
            <View key={'Voltar'} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.btn} onPress={() => props.navigation.goBack()}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Voltar</Text>
                </TouchableOpacity>
            </View>)

        return <ScrollView style={{ backgroundColor: '#fff' }} persistentScrollbar={true}>{showResult}</ScrollView>;
    }

    return (conditionalRender());

}

const styles = StyleSheet.create({

    btn: {
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