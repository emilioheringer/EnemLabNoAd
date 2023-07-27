import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity,Alert, Image, KeyboardAvoidingView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'

const Item = ({ photo, comentario, nome, heart, pressHeart, imageHeart, handleDelete }) => (

    <View style={styles.item}>
        <TouchableOpacity onLongPress={handleDelete}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style={{ height: 30, width: 30, marginBottom: 10 }} source={{ uri: photo }} />
            <Text style={{ marginTop: 5, marginLeft: 20 }}>Autor: {nome}</Text>
        </View>
        <Text style={styles.title}>{comentario}</Text>
        <TouchableOpacity onPress={pressHeart} style={{ alignSelf: 'flex-end' }}>
            <View>
                <Image style={{ height: 25, width: 25 }} source={imageHeart} />
                <Text style={{ alignSelf: 'center' }}>{heart}</Text>
            </View>
        </TouchableOpacity>
        </TouchableOpacity>
    </View>
);

const LerComentario = (props) => {
    const [comentOpen, setComentOpen] = useState(false)
    const id = props.route.params.id;
    const assunto = props.route.params.assunto;
    const pergunta = props.route.params.pergunta;
    const [typing, setTyping] = useState('');
    const [text, setText] = useState('');
    const [heartClicked, setHeartClicked] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [update, setUpdate] = useState(false)
    const DATA = [{id:1234, nome: 'EnemLab', photo:'https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/UsersPhotos%2FJZ5QMCL0M4X8NPJ7UYZTIQY9KF13?alt=media&token=7d2c028a-5ccb-4a0b-b829-d2a4ae25d46f', comentario:'Clique em responder para adicionar seu comentário'}];
   // const [incrementou, setIncrementou] = (false)

    const renderItem = ({ item }) => {
        const imageHeart = item.id === selectedId ? require('../../assets/icons/clickedHeart.png') : require('../../assets/icons/heart.png')
        //const heartTrue = database().ref('/hudComentarios/pergunta/' + id + '/comentarios/' + item.id + '/quemcomentou').child(auth().currentUser.uid).child('/comentou')
       // heartTrue.on('value', snapshot => {
            // if(snapshot.val()===true){}
             //return null
          //   console.log(snapshot.val())
       // })
        const pressHeart = () => {
           if(item.id!==1234){
            database().ref('/hudComentarios/pergunta/' + id + '/comentarios/' + item.id).update({ heart: database.ServerValue.increment(1) })
          //  const reference = database().ref('/hudComentarios/pergunta/' + id + '/comentarios/' + item.id + '/quemcomentou').child(auth().currentUser.uid)
           // reference.set({ comentou: true })
        }
           
            //setSelectedId(item.id)
            console.log(item.id)
            setHeartClicked(true)
        }
        
        //console.log(item.quemcomentou)
        return (
            <Item 
            handleDelete={()=>{
                return Alert.alert('Tem Certeza?', 'Tem certeza que deseja apagar o comentário?',
                [{text: 'Sim', onPress: async ()=> await database().ref('/hudComentarios/pergunta/' + id + '/comentarios/' + item.id).remove().then(setUpdate(!update))}, {text:'Não'}])
                console.log(item)
            }}
            item={item} comentario={item.comentario} photo={item.photo} nome={item.nome} heart={item.heart} imageHeart={imageHeart} pressHeart={() => pressHeart()} quemcomentou={item.quemcomentou} />
        )
    }

    useEffect(() => {
        const onValueChange = database()
            .ref('/hudComentarios/pergunta/' + id + '/comentarios')
            .on('value', snapshot => {
                snapshot.forEach((childSnapshot) => {
                    DATA.unshift({
                        id: childSnapshot.key,
                        comentario: childSnapshot.val().texto,
                        nome: childSnapshot.val().nome,
                        photo: childSnapshot.val().photo,
                        uid: childSnapshot.val().uid,
                        heart: childSnapshot.val().heart,
                        quemcomentou: childSnapshot.val().quemcomentou
                    }
                    )
                })

            });
            setHeartClicked(false)
        // Stop listening for updates when no longer required
        return () => database().ref('/hudComentarios/pergunta/' + id + '/comentarios').off('value', onValueChange);
    }, [comentOpen, !heartClicked, update]);





    const setData = () => {
        const reference = database().ref('/hudComentarios/pergunta/' + id + '/comentarios').push();
        reference.set({
            texto: text,
            uid: auth().currentUser.uid,
            nome: auth().currentUser.displayName,
            photo: auth().currentUser.photoURL,
            heart: 0

        })
    }
    const handleSubmit = () => {
        setData();
        setComentOpen(false)
    }

    if (comentOpen) {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <TextInput onChangeText={(text) => setText(text)} style={{ flex: 1, margin: 10, borderWidth: 0.2, borderRadius: 5, textAlign: 'center' }} placeholder="Esreva sua resposta"></TextInput>
                <View style={{ marginHorizontal: 20, marginBottom: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => handleSubmit()}>
                        <Image style={{ width: 30, height: 30, marginLeft: 50 }} source={require('../../assets/icons/send.png')} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData
                ListHeaderComponent={
                    <View style={{ flex: 1 }}>
                        <View style={styles.container} key={0}>
                            <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: 'bold' }}>Assunto:</Text>
                            <Text style={styles.text}>{assunto}</Text>
                        </View>
                        <View style={styles.container} key={1}>
                            <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: 'bold' }}>Pergunta:</Text>
                            <Text style={styles.text}>{pergunta}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setComentOpen(true)} key={2} style={{ alignSelf: 'center' }}>
                            <View style={styles.btn}>
                                <Text style={{ color: 'white' }} >Responder</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 20,
        

    },
    item: {
        padding: 20,
        borderRadius: 5,
        margin: 10,
        borderWidth: 0.2,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
    },
    text: {
        fontSize: 20
    },

    btn: {
        height: 30,
        width: 100,
        backgroundColor: '#aedaff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10
    }
});

export default LerComentario
