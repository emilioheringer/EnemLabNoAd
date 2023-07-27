import React from 'react';
import {Text, ScrollView, Linking, TouchableOpacity, StyleSheet } from 'react-native'



export default function Ajuda() {

    return (
        <ScrollView>
            <Text key={0} style={{ fontSize: 15, margin: 10 , color:'#000'}}>Guia do Aplicativo</Text>
            <Text key={1} style={styles.texto}>{'Para voltar a tela pricipal de cada seção, cliqe duas vezes no icone do navegador inferior.\n\nNa tela início você pode acessar dicas semanais, além de ver dicas de como estudar. Também é possível acessar o ranking geral e ver sua pontuação.\n\nO aplicativo está repleto de conteúdo com textos e imagens. Aproveite o máximo pois cobrimos todos os assuntos relevantes para o Enem.'}</Text>
            <Text key={2} style={styles.texto}>{'Contato:\n\nPor favor, qualquer dúvida entre em contatos conosco pelo site:\n'} <TouchableOpacity onPress={() => Linking.openURL('https:purovoodootech.herokuapp.com')}>
                <Text style={{ color: '#1c26f7', fontSize: 15, color:'#000' }}>www.purovoodootech.herokuapp.com{'\n'}</Text>
                <Text style={{fontSize: 15, color:'#000' }}>Ou nos envie um email</Text>
            </TouchableOpacity><TouchableOpacity onPress={() => Linking.openURL('mailto:purovoodootech@protonmail.com?subject=Preciso de ajuda&body=Digite o texto para receber ajuda')}>
                    <Text style={{ color: '#1c26f7', fontSize: 15 }}>purovoodootech@protonmail.com</Text>
                </TouchableOpacity>{'\n\nVocê pode clicar no link e será redirecionado'}</Text>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 15,
        textAlign: 'justify',
        margin: 10,
        marginRight: 10,
        color: '#000'
    }
})