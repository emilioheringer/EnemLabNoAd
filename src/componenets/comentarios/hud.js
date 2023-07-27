import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, Alert, VirtualizedList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Postar from "./postar";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'



const Item = ({ item, onPress, backgroundColor, textColor, handleDelete }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={{ uri: item.photo }} />
      <Text style={[{ marginLeft: 20, fontSize: 15 }, textColor]}>Autor {item.nome}</Text>{
        item.uid === auth().currentUser.uid && <TouchableOpacity onPress={handleDelete}><Image style={{ width: 25, height: 25, marginLeft: 150 }} source={require('../../assets/icons/excluir.png')} /></TouchableOpacity>}
    </View>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>

);

//const DATA=[{}];

const Hud = () => {
  const DATA = [{ id: 12343, title: 'Aqui Você pode fazer suas perguntas', nome: 'EnemLab', photo: 'https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/UsersPhotos%2FJZ5QMCL0M4X8NPJ7UYZTIQY9KF13?alt=media&token=7d2c028a-5ccb-4a0b-b829-d2a4ae25d46f' }];

  const [update, setUpdate] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
  //const DATA = [{ nome: 'João Vitor', title: 'Alguem pode me ajudar na questão 11 de matemática?', photo: 'https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/10091-nerd-face-icon.png?alt=media&token=b430dea2-6aca-4510-b977-9b854dc69109' }];
  const [postarOpen, setPostarOpen] = useState(false);

  useEffect(() => {
    const onValueChange = database()
      .ref('/hudComentarios/pergunta')
      .on('value', snapshot => {
        snapshot.forEach((childSnapshot) => {
          DATA.unshift({
            id: childSnapshot.key,
            title: childSnapshot.val().assunto,
            nome: childSnapshot.val().nome,
            photo: childSnapshot.val().photo,
            uid: childSnapshot.val().uid,
            pergunta: childSnapshot.val().pergunta
          }
          )
        })
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/hudComentarios/pergunta').off('value', onValueChange);
  }, [selectedId]);



  const PressComent = ({ item }) => {
    setSelectedId(item.id)
    navigation.navigate('LerComentario')
  }


  const deleteItem = ({ item }) => {
    if (item.id === selectedId) {
      console.log('deletou')
    }

  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#aedaff" : "white";
    const color = item.id === selectedId ? 'white' : 'black';


    return (
      <Item
        item={item}
        handleDelete={() => {//  if(item.id===selectedId)/
          return Alert.alert('Tem Certeza?', 'Tem certeza que deseja apagar a pergunta?',
            [{ text: 'Sim', onPress: () => database().ref('/hudComentarios/pergunta/' + item.id).remove().then(setUpdate(!update)) }, { text: 'Não' }])
          //database().ref('/hudComentarios/pergunta/'+item.id).remove();
          console.log(item)
        }}
        onPress={() => navigation.navigate('LerComentario', { id: item.id, assunto: item.title, pergunta: item.pergunta })}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />

    );
  };

  if(postarOpen){
    return(
      <Postar/>
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
          <TouchableOpacity onPress={() => setPostarOpen(true)}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 60, borderRadius: 5, marginLeft: 10, marginRight: 10, marginBottom: 5, borderWidth: 0.1 }}>
              <Text >Clique aqui para fazer uma pergunta</Text>
            </View>
          </TouchableOpacity>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,

  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 15,
  },

});

export default Hud;