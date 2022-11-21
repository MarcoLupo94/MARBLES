import { StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useState, useRef } from 'react';
// import apiService from '../../ApiService';
import { Alert } from 'react-native';//added for test

import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebaseConfig'



// // TODO: Replace the following with your app's Firebase project configuration


export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearEmail = useRef();
  const clearPassword = useRef();

  //this watches when Auth state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //if login auto redirect to habbit page
      const uid = user.uid;
      console.log(uid)
      navigation.replace('Habits');
      // ...
    } else {
      // User is signed out
      // ...
      // TODO: return to the landing page. And sign out function needed
      //SignOut function:
      // import { signOut } from "firebase/auth";

      // signOut(auth).then(() => {
      //   // Sign-out successful.
      // }).catch((error) => {
      //   // An error happened.
      // });
    }
  });

  const handleSubmit = async () => {
    // const userDataToSend = { email, password };
    if (!email) {
      Alert.alert('Please enter email address');
      console.log('123123')
      return;
    }
    if (!password) {
      Alert.alert('Please enter password');

      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if (user) {
          navigation.replace('Habits');
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });




    //   const result = await apiService.login(userDataToSend);

    //   if (result === 'Please register') {
    //     Alert.alert('Please register');

    //     clearEmail.current.clear();
    //     clearPassword.current.clear();
    //   } else {
    //     navigation.replace('Habits');
    //   }

  };






  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.text} source={require('../../assets/Frame.png')} />
      <Image style={styles.marble} source={require('../../assets/Marbles.png')} />
      <View style={styles.inputView}>
        <TextInput
          testID='email-input'
          ref={clearEmail}
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          testID='password-input'
          ref={clearPassword}
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder="PASSWORD"
          placeholderTextColor="#353535"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        testID='login-button'
        style={styles.button}
        onPress={() => handleSubmit()}
      >
        <Image style={styles.login} source={require('../../assets/Group.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        testID='register-button'
        style={styles.button}
        onPress={() => { navigation.replace('Register') }}
      >
        <Image style={styles.register} source={require('../../assets/Register.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7197AC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marble: {
    position: 'absolute',
    height: 300,
    width: 300,
    bottom: '47.5%',
  },
  text: {
    position: 'absolute',
    bottom: '70%',
  },
  inputView: {
    bottom: '-20%',
    backgroundColor: '#D9D9D9',
    opacity: 0.6,
    borderRadius: 30,
    width: '70%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    flex: 1,
    alignItems: 'stretch',
  },
  button: {
    bottom: '-20%',
  },
  login: {
    height: 50,
    width: 100,
  },
  register: {
    top: 50,
  },
});
