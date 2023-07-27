import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import YoutubePlay from './youtubeComponent';

export default function SeeContent (props) {
    const [loaded, setLoaded] = useState(false);
    


    const conditionalRender = () => {
        //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
        const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
        const textForDisplay = props.route.params.textForDisplay;
        let showResult = [];
        let result = textForDisplay.split(regex);
        //let videotoPlay = this.props.route.params.videotoPlay;
        let videotoPlay = '';
        for (let i = 0; i < result.length; i++) {
            if (result[i].includes('https')) {
                showResult.push(<View style={{ flex: 1, marginTop: 10, height: 300 }} key={i} ><Image style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'contain' }} source={{ uri: result[i] }} /></View>);
            } else {
                showResult.push(<Text selectable={true} style={{ fontSize: 15, marginTop: 10, marginLeft: 15, marginRight: 15, textAlign: 'justify', color: '#000000' }} key={i}>{result[i].replace('\\n', '\n').replace('\\n', '\n').replace('\\n', '\n').replace('\\n', '\n')}</Text>);
            }
        }
        if (typeof (videotoPlay) !== 'undefined') {
            let n = showResult.length + 1;
            //showResult.push(<YoutubePlay key = {n} videoId={videotoPlay}/>);
        }
        return <ScrollView style={{ marginTop: 10, backgroundColor: '#fff' }} persistentScrollbar={true}>{showResult}</ScrollView>;
    }

    return (conditionalRender());
       
    
}