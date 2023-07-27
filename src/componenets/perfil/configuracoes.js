import React from 'react';
import { ScrollView, Text } from 'react-native'
import CardWithChangeButton from '../perfil/cardWithChangeButton'

import { useState } from 'react';

const Conf = () => {
    //const [oculto, setOculto] = useState(false);


    return (
        <ScrollView style={{flex:1, marginTop:10}}>
            <Text key={0} style={{alignSelf:'center', fontSize:20,fontWeight:'bold' ,marginBottom:20, color:'#000'}}>Configurações</Text>
             <CardWithChangeButton key={1} nome='Perfil Oculto' pressed={false} message='Ocultar nome e foto público'/>
             <CardWithChangeButton key={2} nome='Ranking' pressed={true} message='Deixe ativado se deseja participar do ranking'/>
             <CardWithChangeButton key={3} nome='Modo Noturno' pressed={false} message='Ativar/Desativar modo noturno'/>

        </ScrollView>
    )
}

export default Conf;