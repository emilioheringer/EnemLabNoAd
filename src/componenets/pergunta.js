import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { CheckBox, Icon } from '@rneui/themed'
import Solucao from './solucao';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NetInfo from "@react-native-community/netinfo";


const Pergunta = (props) => {
    const ref = React.useRef();
    const [checkA, setCheckA] = useState(false);
    const [checkB, setCheckB] = useState(false);
    const [checkC, setCheckC] = useState(false);
    const [checkD, setCheckD] = useState(false);
    const [checkE, setCheckE] = useState(false);
    const [check, setCheck] = useState('');
    const [rank, setRank] = useState(0);
    const [acertou, setacertou] = useState(false);
    const [controle, setControle] = useState(1);
    const [data, setData] = useState('');
    const [internet, setInternet] = useState(true);
    const [numMax, setNumMax] = useState(82);


    const disciplina = props.route.params.disciplina;


    useEffect(() => {
        const subscriber = firestore().collection('numerodequestoes').doc('questões')
            .onSnapshot(documentSnapshot => {
                setNumMax(documentSnapshot.data().numero)
            })
        console.log(numMax)
        return () => subscriber();
    }, [controle])

    //const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';
    useEffect(() => {
        const subscriber = firestore().collection('controlededisciplina').doc(auth().currentUser.uid)
            .onSnapshot(documentSnapshot => {
                if (disciplina.includes('inguage')) {
                    setControle(documentSnapshot.data().linguagem)

                } else if (disciplina.includes('atematic')) {
                    setControle(documentSnapshot.data().matematica)

                } else if (disciplina.includes('aturez')) {
                    setControle(documentSnapshot.data().natureza)

                } else if (disciplina.includes('umana')) {
                    setControle(documentSnapshot.data().humanas)
                }
                setRank(documentSnapshot.data().rank)
            })
        console.log(disciplina, controle);
        return () => subscriber();
    }, [controle])



    useEffect(() => {
        const subscriber = firestore().collection('questoes').doc('P72jOORm40pGXCzNSmsJ').collection(disciplina).doc(controle.toString()).onSnapshot(
            documentSnapshot => {
                setData(documentSnapshot.data());
            }
        )
        return () => subscriber();

    }, [controle])

    const Resetar = () => {
        setControle(1)
        if (disciplina.includes('inguage')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                linguagem: 1

            })
        } else if (disciplina.includes('atematic')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                matematica: 1

            })
        } else if (disciplina.includes('aturez')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                natureza: 1

            })

        } else if (disciplina.includes('umana')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                humanas: 1

            })
        }
    }

    const handleAnterior = () =>{
        if(controle > 1){
        setControle(controle-1)
        if (disciplina.includes('inguage')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                linguagem: controle-1

            })
        } else if (disciplina.includes('atematic')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                matematica: controle-1

            })
        } else if (disciplina.includes('aturez')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                natureza: controle-1

            })

        } else if (disciplina.includes('umana')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                humanas: controle-1

            })
        }
    }

    }

    if (controle === 21) {
        setControle(22);
    }

    if (controle > numMax) {
        return (
            <View style={{ flex: 1, marginTop: 150, alignItems: 'center' }}>
                <Image style={{ width: 200, height: 200 }} source={(require('../assets/icons/icon.png'))} />
                <Text style={{ textAlign: 'justify', marginTop: 30, fontSize: 20, margin: 10, color: '#000' }}>Desculpe. Você respondeu todas as questões de {disciplina}. Clique em resetar para voltar para a primeira questão ou aguarde novas questões serem adicionadas.</Text>
                <TouchableOpacity style={styles.btn} onPress={() => Resetar()}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Resetar</Text>
                </TouchableOpacity >
            </View>
        )
    }



    const showToast = () => {
        if (check != '') {
            if (check === data.Certa) {
                Alert.alert('', "Resposta Certa!");
                firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                    rank: rank + 1
                })
            } else { Alert.alert('', "Resposta Errada!"); }
        }

    }


    const confirmar = () => {
        showToast();
        setCheckA(false);
        setCheckB(false);
        setCheckC(false);
        setCheckD(false);
        setCheckE(false);
        ref.current
        if (disciplina.includes('inguage')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                linguagem: controle + 1,

            })
        } else if (disciplina.includes('atematic')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                matematica: controle + 1,

            })
        } else if (disciplina.includes('aturez')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                natureza: controle + 1,

            })

        } else if (disciplina.includes('umana')) {
            firestore().collection('controlededisciplina').doc(auth().currentUser.uid).update({
                humanas: controle + 1,

            })
        }


    }


    const handleA = () => {
        setCheckA(true)
        setCheckB(false)
        setCheckC(false)
        setCheckD(false)
        setCheckE(false)
        setCheck('A')
    }

    const handleB = () => {
        setCheckA(false)
        setCheckB(true)
        setCheckC(false)
        setCheckD(false)
        setCheckE(false)
        setCheck('B')
    }

    const handleC = () => {
        setCheckA(false)
        setCheckB(false)
        setCheckC(true)
        setCheckD(false)
        setCheckE(false)
        setCheck('C')
    }

    const handleD = () => {
        setCheckA(false)
        setCheckB(false)
        setCheckC(false)
        setCheckD(true)
        setCheckE(false)
        setCheck('D')
    }

    const handleE = () => {
        setCheckA(false)
        setCheckB(false)
        setCheckC(false)
        setCheckD(false)
        setCheckE(true)
        setCheck('E')
    }



    if (typeof data.Pergunta === 'undefined') {
        return (<View><Text>Aguardando resposta do banco de dados</Text></View>)
    }
    function handleCheckBox(datacheck) {
        let showCheck = [];
        let showcheckResult = datacheck.split(regex);
        for (let i = 0; i < showcheckResult.length; i++) {
            if (showcheckResult[i].includes('https')) {
                showCheck.push(<View style={{ marginTop: 10, height: 300 }} key={i} ><Image style={{ flex: 1, width: 200, height: 200, resizeMode: 'contain' }} source={{ uri: showcheckResult[i] }} /></View>);
            } else {
                showCheck.push(<Text style={{ fontSize: 15, marginTop: 10, marginLeft: 15, marginRight: 15, alignSelf: 'center', textAlign: 'justify', color: '#000000' }} key={i}>{showcheckResult[i].replace(/\\n/g, '\n')}</Text>);
            }
        }

        return (<View style={{ flex: 1, flexDirection: 'row' }}>{showCheck}</View>)
    }

    const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    const renderizar = () => {
        let showResult = [];
        let solucao = data.Solucao;
        let result = data.Pergunta.split(regex);
        showResult.push(<Text key={'questao'} style={{ fontSize: 20, marginLeft: 12, color: '#000000' }}>{'Questão'}</Text>)
        //Vizualida text ou imagem dependendo do texto
        for (let i = 0; i < result.length; i++) {
            if (result[i].includes('https')) {
                showResult.push(<View style={{ flex: 1, marginTop: 10, height: 300 }} key={i} ><Image style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'contain' }} source={{ uri: result[i] }} /></View>);
            } else {
                showResult.push(<Text style={{ fontSize: 15, marginTop: 10, marginLeft: 15, marginRight: 15, textAlign: 'justify', color: '#000000' }} key={i}>{result[i].replace(/\\n/g, '\n')}</Text>);
            }
        }


        //Radio Buttton
        showResult.push(
            <View key={'radio'} style={styles.radiobutton}>
                <CheckBox title={handleCheckBox(data.A)}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checkA}
                    onPress={() => handleA()} />

                <CheckBox title={handleCheckBox(data.B)}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checkB}
                    onPress={() => handleB()} />
                <CheckBox title={handleCheckBox(data.C)}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checkC}
                    onPress={() => handleC()} />
                <CheckBox title={handleCheckBox(data.D)}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checkD}
                    onPress={() => handleD()} />
                <CheckBox title={handleCheckBox(data.E)}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={checkE}
                    onPress={() => handleE()} />
            </View>)
        showResult.push(
            <View key={'confirmar'} style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{flexDirection:'row', flex:1, alignContent:'space-between'}}>
                    <TouchableOpacity style={styles.btn3} onPress={() => confirmar()}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn3} onPress={()=> {handleAnterior()}}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Anterior</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn2} onPress={() => {
                    props.navigation.navigate('Solucao', { textForDisplay: { solucao } })
                }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Ver Solucao</Text>
                </TouchableOpacity>

            </View>)
        return <ScrollView ref={ref} style={{ marginTop: 10, backgroundColor: '#fff' }} persistentScrollbar={true}>{showResult}</ScrollView>;
    }

    return (
        renderizar()
    )
}

export default Pergunta;

const styles = StyleSheet.create({
    radiobutton: {
        flex: 1,
        marginTop: 10,
    },
    btn: {
        backgroundColor: '#aedaff',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20

    },
    btn2: {
        backgroundColor: '#aedaff',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20

    },
    btn3: {
        backgroundColor: '#aedaff',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 20,
        marginHorizontal: 10

    },

})