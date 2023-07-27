import {ScrollView, StyleShee, Text} from 'react-native'
import React from 'react'

const Regras = () => {
return(<ScrollView>
    <Text key={1} style={{fontSize:20,marginBottom:10 ,alignSelf:'center', marginRight:10, marginTop:10, color:'#000'}}>Regras para o usuário</Text>
    <Text key={2} style={{fontSize:16,marginBottom:10,marginLeft:10,textAlign:'justify' ,marginRight:10, marginTop:10, color:'#000'}}>{'- Não utilize palavrões no nome de usuário.\n\n- Não chinge outros usuários nos comentários.\n\nEssas duas regras, se descumpridas, acarretarão no banimento do usuároo.'}</Text>
    <Text key={3} style={{fontSize:20,marginBottom:10 ,alignSelf:'center', marginRight:10, marginTop:10, color:'#000'}}>Regras do aplicativo</Text>
    <Text key={4} style={{fontSize:16,textAlign:'justify',marginLeft:10, marginRight:10, marginTop:10, color:'#000'}}>{'- O conteúdo da dica da semana é renovado toda semana então, se sentir necessário, copie o conteúdo pois ele não ficará disponível depois que a semana acabar\n\n- Todas as diciplinas possuem o mesmo peso;\n\n- O calculo do ranking é baseado no cáculo do enem com adaptações para remover o peso da redação.\n\n- Errar questões diminui sua posição;\n\n- Seu raking é baseado na quantidade de questões respondias.'}</Text>
</ScrollView>)
}

export default Regras;