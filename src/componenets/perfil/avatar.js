import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import * as ImagePicker from "react-native-image-picker"

export default function Avatar() {
  const [name, setName] = useState('Nome')
  const user = auth().currentUser;
  const [filepath, setFilePath] = '';
  const [image, setImage] = useState(null);
  const [imageDisplay, setImageDisplay] = useState('https://firebasestorage.googleapis.com/v0/b/enem-8afd6.appspot.com/o/istockphoto-587805156-612x612.jpg?alt=media&token=099b77a9-a34a-45e1-989f-761980c2944c')
  const [mudou, setMudou] = useState(false)
  //const imagem = fetch(auth().currentUser.photoURL);
  useEffect(() => {

    setName(user.displayName)
    if (user.photoURL !== null) {
      setImageDisplay(auth().currentUser.photoURL)
    }

  }, [user.displayName, imageDisplay, mudou])



  const launchImageLibrary = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        //const source = { uri: response.uri };
        // console.log('response', JSON.stringify(response));
        // setFilePath()

        //setImage(source);
        // console.log(response.assets[0].uri)
        setImage(response.assets[0].uri)
        uploadImage()
        // console.log(auth().currentUser)
      }
    });

  }

  const uploadImage = async () => {
    const reference = storage().ref('/UsersPhotos/' + user.uid);
    const img = await fetch(image)
    const byte = await img.blob();
    await reference.put(byte)
    const imaAux = await reference.getDownloadURL();
    console.log(imaAux);
    setMudou(!mudou);
    auth().currentUser.updateProfile({
      photoURL: imaAux
    }).then(setMudou(console.log(imaAux)))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={launchImageLibrary}>
        <Image style={styles.image} source={{ uri: imageDisplay }} />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb( 152, 193, 245 )',
    height: 300,
    borderColor: '#fff',
    //marginTop:30,
  },

  image: {
    //flex: 1,
    marginTop: 35,
    height: 180,
    width: 180,
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 90,
  },

  text: {
    fontSize: 28,
    marginTop: 15,
  }
});

