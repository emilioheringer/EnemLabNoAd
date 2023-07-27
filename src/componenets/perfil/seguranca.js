import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableHighlight } from 'react-native'
import CardToEdit from './cardToEdit';
import AlterarSenha from './alterarsenha';


const Seguranca = (props) => {

    return (
        <ScrollView style={{ flex: 1, marginTop: 10 }}>
            <Text key={0} style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 20, color:'#000' }}>Senhas e Segurança</Text>
            <TouchableHighlight key={1} style={{ borderRadius: 10, flex: 1, height: 150, width: '95%', alignSelf: 'center', backgroundColor: '#aedaff' }} underlayColor={'#ccc'} onPress={() => props.navigation.navigate('Recomendacoes')}>
                <View >
                    <Text style={{ marginTop: 40, margin: 20, fontSize: 20, color:'#000' }}>Clique para ler nossas recomendações de segurança</Text>
                </View>
            </TouchableHighlight>
            <AlterarSenha key={2} />
            <CardToEdit key={3} nome='Autentificação de dois fatores' />
            <View key={4} style={styles.container} >
                <TouchableHighlight underlayColor={'#ccc'} style={{ flex: 1, marginTop: 10 }} onPress={() => props.navigation.navigate('Ajuda')}><View style={{ marginLeft: 20 }}><Text >Obter Ajuda</Text><Text style={{ color: '#b2a8a9' }}>Clique para obter ajuda</Text></View></TouchableHighlight>
            </View>
            
        </ScrollView>
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

export default Seguranca;