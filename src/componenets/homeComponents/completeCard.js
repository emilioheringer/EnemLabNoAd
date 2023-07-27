import { View, Text } from 'react-native';
import React from 'react';
import HomeRankCard from './homeRankCard';
export default function CompleteCard() {
    return (
        <View style={{alignSelf:'center', marginTop: 30, width: 350, marginBottom:40 }}>
            <View key={0} style={{alignItems:'center', justifyContent:'center' ,height: 40, width: '100%', backgroundColor: '#aedaff', borderRadius: 5, }}>
                <Text style={{fontSize: 20, color:'#fff'}}>Ranking Geral</Text>
            </View>
            <HomeRankCard key={1} image={'https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/10091-nerd-face-icon.png?alt=media&token=b430dea2-6aca-4510-b977-9b854dc69109'} nome='João Vitor' ponto ='823' icon={require('../../assets/icons/first.png')} />
            <HomeRankCard key={2} image={'https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/bts.jpg?alt=media&token=e5aef67b-0380-491a-aa7c-bd84551c1ef6'} nome='Gabrielly F.' ponto ='810' icon={require('../../assets/icons/second.png')} />
            <HomeRankCard key={3} image={'https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/doctor-character-background_1270-84.png?alt=media&token=4726d430-a005-4ff8-b0f1-e5e60bcc979b'} nome='Cassia Figueredo' ponto ='807' icon={require('../../assets/icons/3.png')} />
            <HomeRankCard key={4} nome='Matias Junior' ponto ='792'icon={require('../../assets/icons/4.png')} />
            <HomeRankCard key={5} nome= 'Gabriel' ponto ='790' icon={require('../../assets/icons/5.png')} />
        </View>)
}