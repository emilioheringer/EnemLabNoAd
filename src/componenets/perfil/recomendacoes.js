import React from 'react';
import { View, Text, ScrollView} from 'react-native'


export default function Recomendacoes() {

    return (
        <ScrollView>
            <Text key={0} style={{marginTop:10,alignSelf:'center',fontSize:16,}}>Siga as instruções para manter-se seguro:</Text>
            <Text key={1} style={{textAlign: 'justify',margin:10}}>Sua segurança e privacidade são extremamente importantes para nós. Por isso,
            jamais compartilhe seus dados pessoais.  </Text>
            <Text key={2} style={{textAlign: 'justify',margin:10}}>Não compartilhe sua senha. A senha é o único vínculo que você possui com o aplicativo. 
            Compartilhando a senha, você está sujeito a pessoas más intencionadas que podem acessar seus dados pessoais.</Text>
            <Text key={3} style={{textAlign: 'justify',margin:10}}>{'Utilize senhas fortes. Uma senha forte deve possuir pelo menos 8 caracteres contendo:\n\n- Letras Maiúsculas;\n\n- Letras Minúsculas;\n\n-Números e\n\n- Caracteres Especiais.\n\nA nossa dica para ter uma senha forte é usar o maior número de caracteres que você conseguir. Uma frase aleatória como toddynho notebook ops mobilei é muito mais difícil de ser adivinhada do que Toddynho2018!. A primeira demoraria 695 octilhões (10²⁷) de anos para ser descoberta, enquanto a segunda seria adivinhada em 3 milhões de anos.'}</Text>
            <Text key={4} style={{textAlign: 'justify',margin:10}}>Ative o modo noturno durante a noite. A exposição prolongada à luz azul causa fadiga ocular, incluindo olhos secos, dores de cabeça e visão embaçada. Além disso, a luz azul também altera nosso relógio biológico, podendo causar dificuldades para dormir.</Text>
        </ScrollView>

    )
}