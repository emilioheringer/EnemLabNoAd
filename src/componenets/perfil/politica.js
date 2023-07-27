import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default function Politica() {
    const termosGerais = 'Política de Privacidade Puro Voodoo construiu o aplicativo Estude para o Eem como um aplicativo Ad Supported. Este SERVIÇO é fornecido pela Puro Voodoo sem custo e destina-se ao uso como está. Esta página é usada para informar os visitantes sobre minhas políticas de coleta, uso e divulgação de Informações Pessoais se alguém decidir usar meu Serviço. Se você optar por usar meu Serviço, concorda com a coleta e uso de informações em relação a esta política. As Informações Pessoais que eu coleto são usadas para fornecer e melhorar o Serviço. Não usarei ou compartilharei suas informações com ninguém, exceto conforme descrito nesta Política de Privacidade. Os termos usados ​​nesta Política de Privacidade têm os mesmos significados que em nossos Termos e Condições, que estão acessíveis em Estude para o Eem, salvo definição em contrário nesta Política de Privacidade. Coleta e uso de informações Para uma melhor experiência, ao usar nosso Serviço, posso exigir que você nos forneça certas informações de identificação pessoal, incluindo, entre outras, Nome, Sobrenome, E-mail, Telefone. As informações que eu solicitar serão retidas no seu dispositivo e não serão coletadas por mim de forma alguma. O aplicativo usa serviços de terceiros que podem coletar informações usadas para identificá-lo. Link para a política de privacidade de provedores de serviços terceirizados usados ​​pelo aplicativo\n\n- Google Play Services\n\n- AdMob\n\n- Google Analytics for Firebase';
    const logData = 'Quero informar que sempre que você usar meu Serviço, em caso de erro no aplicativo, coleto dados e informações (através de produtos de terceiros) em seu telefone chamado Log Data. Esses Dados de Registro podem incluir informações como o endereço do Protocolo de Internet (“IP”) do seu dispositivo, nome do dispositivo, versão do sistema operacional, a configuração do aplicativo ao utilizar meu Serviço, a hora e a data de seu uso do Serviço e outras estatísticas .'
    const provedor = 'Posso empregar empresas e indivíduos terceirizados pelos seguintes motivos:\n\n- Para facilitar nosso Serviço;\n\n- Para fornecer o Serviço em nosso nome;\n\n- Para executar serviços relacionados ao Serviço; ou\n\n- Para nos ajudar a analisar como nosso Serviço é usado.\n\nQuero informar aos usuários deste Serviço que esses terceiros têm acesso às suas Informações Pessoais. O motivo é realizar as tarefas atribuídas a eles em nosso nome. No entanto, eles são obrigados a não divulgar ou usar as informações para qualquer outra finalidade.'
    const seguranca = 'Eu valorizo ​​sua confiança em nos fornecer suas informações pessoais, portanto, estamos nos esforçando para usar meios comercialmente aceitáveis ​​de protegê-las. Mas lembre-se que nenhum método de transmissão pela internet, ou método de armazenamento eletrônico é 100% seguro e confiável, e não posso garantir sua segurança absoluta.'
    const link = 'Este Serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Observe que esses sites externos não são operados por mim. Portanto, aconselho vivamente a rever a Política de Privacidade desses sites. Não tenho controle e não assumo responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites ou serviços de terceiros.'
    const crianca = 'Esses Serviços não se dirigem a menores de 13 anos. Não coleto intencionalmente informações de identificação pessoal de crianças menores de 13 anos. No caso de eu descobrir que uma criança menor de 13 anos me forneceu informações pessoais, eu imediatamente as excluo de nossos servidores. Se você é pai ou responsável e está ciente de que seu filho nos forneceu informações pessoais, entre em contato comigo para que eu possa tomar as medidas necessárias.'
    const alteracao = 'Posso atualizar nossa Política de Privacidade de tempos em tempos. Assim, recomendamos que você revise esta página periodicamente para quaisquer alterações. Vou notificá-lo sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Esta política está em vigor a partir de 29/03/2022'
    const contato = 'Se você tiver alguma dúvida ou sugestão sobre minha Política de Privacidade, não hesite em me contatar em purovoodootech@protonmail.com.'
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text key={0} style={{ marginTop: 10, fontSize: 22, fontWeight: 'bold', alignSelf: 'center' , color:'#000'}}>Política de Privacidade</Text>
            <Text key={1} style={styles.paragrafo}>1. Termos Gerais</Text>
            <Text key={2} style={styles.texto}>{termosGerais}</Text>
            <Text key={3} style={styles.paragrafo}>2. Log Data</Text>
            <Text key={4} style={styles.texto}>{logData}</Text>
            <Text key={5} style={styles.paragrafo}>3. Provedores de serviço</Text>
            <Text key={6} style={styles.texto}>{provedor}</Text>
            <Text key={7} style={styles.paragrafo}>4. Segurança</Text>
            <Text key={8} style={styles.texto}>{seguranca}</Text>
            <Text key={9} style={styles.paragrafo}>5. Links para outros sites</Text>
            <Text key={10} style={styles.texto}>{link}</Text>
            <Text key={11} style={styles.paragrafo}>6. Privacidade das crianças</Text>
            <Text key={12} style={styles.texto}>{crianca}</Text>
            <Text key={13} style={styles.paragrafo}>7. Alterações nesta Política de Privacidade</Text>
            <Text key={14} style={styles.texto}>{alteracao}</Text>
            <Text key={15} style={styles.paragrafo}>8. Contate-Nos</Text>
            <Text key={16} style={[styles.texto, styles.textoFinal]}>{contato}</Text>




        </ScrollView>
    )
}

const styles = StyleSheet.create({
    paragrafo: {
        textAlign: 'justify',
        marginTop: 15, 
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft:10,
        color:'#000'
    },

    texto: {
        textAlign: 'justify',
        marginTop: 15, 
        margin:15,
        color: '#000'
    },
    textoFinal: {
        textAlign: 'justify',
        marginTop: 15, 
        margin:15,
        marginBottom:25,
        color: '#000'
    }
})