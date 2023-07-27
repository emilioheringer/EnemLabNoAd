import React, { useState, useEffect } from 'react';
import { Text, KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native';

//Import firebase e auth
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();
    const [initializing, setInitializing] = useState(true);

 


    const handleCreateAccount = () => {
        auth().createUserWithEmailAndPassword(email, password).then(
            ToastAndroid.show("Conta criada com Sucesso!", ToastAndroid.SHORT),

        ).catch(
            error => {
                if (error) {
                    console.log('That email address is already in use!');
                    ToastAndroid.show("Erro ao criar conta. Tente novamente!", ToastAndroid.SHORT)
                }
                console.error(error);
            }
        )
    }

    //Cria os dados inicias do Firestore quando uma conta é criada


    const handleLoginAccount = () => {
        auth().signInWithEmailAndPassword(email, password).then(
            ToastAndroid.show("LoginRealizado com Sucesso!", ToastAndroid.SHORT)
        ).catch(
            error => {
                if (error) {
                    console.log('That email address is already in use!');
                    ToastAndroid.show("Erro no Login', 'Não foi possível realizar o login. Tente novamente!", ToastAndroid.SHORT);
                }
                console.error(error);
            }
        )
    }

    const ForgetPassword = async() => {
        if(email!==""){
        auth().sendPasswordResetEmail(email).then(()=>ToastAndroid.show("A senha foi enviada para o seu Email", ToastAndroid.SHORT)).catch((error)=>{
            console.log(error);
        })
    }else{
        ToastAndroid.show("Digite o email primeiro, depois clique em esqueceu a senha", ToastAndroid.SHORT);

    }
    }

    const GoogleLogin = async () => {
       //try{
        GoogleSignin.configure({
           webClientId: '867893303717-qeltctcj3ooal16urp74pr85ncbsuuq4.apps.googleusercontent.com',
           offlineAccess: true
        });
    //}catch(e){console.log(e)}
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    const LoginWithFacebook = async () => {

        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        // Sign-in the user with the credential
        auth().signInWithCredential(facebookCredential);
    }


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, [])

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }


    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>

            <Text style={styles.text}>Realize seu Login!</Text>
            <View style={styles.textView}>
                <TextInput
                    value={email}
                    style={styles.textInput}
                    autoCorrect={false}
                    placeholder={"Email"}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => { setEmail(text) }}
                />
            </View>
            <View style={styles.textView}>
                <TextInput
                    value={password}
                    style={styles.textInput}
                    placeholder={"Password"}
                    underlineColorAndroid="transparent"
                    clearButtonMode='always'
                    secureTextEntry={true}
                    onChangeText={(text) => { setPassword(text) }}
                />
            </View>
            <TouchableOpacity onPress={()=>ForgetPassword()}>
                <Text>Esqueceu a senha? Clique aqui</Text>
            </TouchableOpacity>
            <View style={{ height: 150, marginBottom: 10 }}>
                <TouchableOpacity style={styles.btn} onPress={handleLoginAccount}>
                    <Text style={{ fontSize: 20, color: '#aedaff' }}>Entrar</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.btn} onPress={handleCreateAccount}>
                    <Text style={{ fontSize: 20, color: '#aedaff' }}>Registrar</Text>
                </TouchableOpacity >
            </View>
            <Text>ou entre com:</Text>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={styles.btn_face} onPress={()=>{GoogleLogin().then(()=> console.log('logged'))}}>
                    <Image style={styles.imagens} source={require('../assets/icons/google.png')} />
                    <Text style={{ fontSize: 20, color: '#aedaff' }}>Google</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.btn_face} onPress={() => { LoginWithFacebook() }}>
                    <Image style={styles.imagens} source={require('../assets/icons/facebook.png')} />
                    <Text style={{ fontSize: 20, color: '#aedaff' }}>Facebook</Text>
                </TouchableOpacity >
            </View>

            {/*<StatusBar style="auto" backgroundColor='#aedaff' />*/}
        </KeyboardAvoidingView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aedaff',
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80,
    },

    text: {
        fontSize: 30,
        marginBottom: 30
    },

    textView: {
        width: "85%",
        height: 45,
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
        alignItems: 'center',
    },

    textInput: {
        backgroundColor: '#fff',
        height: 50,
        width: '90%',
        flex: 1,
        textAlign: 'center',
    },

    btn: {
        backgroundColor: '#fff',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        marginTop: 20,


    },

    btn_face: {
        backgroundColor: '#fff',
        height: 40,
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        margin: 10,
    },

    imagens: {
        height: 20,
        width: 20,
        //flex:1,
        marginTop: 4,
        marginRight: 10
    }
})

export default Login;