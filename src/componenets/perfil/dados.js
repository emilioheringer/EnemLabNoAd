import React from 'react';
import {ScrollView, Text } from 'react-native'
import CardToEdit from './cardToEdit';

const EditarDados = () => {

    return (
        <ScrollView style={{flex:1, marginTop:10}}>
            <Text key={0} style={{alignSelf:'center', fontSize:20,fontWeight:'bold', marginBottom:20}}>Alterar Dados</Text>
             <CardToEdit key={1} nome='Nome'/>
             <CardToEdit key={2} nome='Sobrenome'/>
             <CardToEdit key={3} nome='Nome de Usuário'/>
             <CardToEdit key={4} nome='Email'/>
             <CardToEdit key={5} nome='Telefone'/>
             <CardToEdit key={6} nome='Meta de Pontos'/>
        </ScrollView>
    )
}

export default EditarDados;