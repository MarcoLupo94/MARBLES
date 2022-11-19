import { StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useState, useRef } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebaseConfig'
import apiService from '../../ApiService';




// TODO TEST CODE / CLEAN CODE / LATER IMPLEMENT REDUX + REFACTOR CSS IN A DIFFERENT FILE=TESTING/CSS/COMPONENT
export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearEmail = useRef();
  const clearPassword = useRef();

  const handleSubmit = async () => {
    const userDataToSend = { email, password };
    if (!email) {
      alert('Please enter email address');
      return;
    }
    if (!password) {
      alert('Please enter password');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    // const result = await apiService.register(userDataToSend);
    // if (result === 'Email already registered') {
    //   alert('Email already registered');
    //   clearEmail.current.clear();
    //   clearPassword.current.clear();
    // } else {
    //   navigation.navigate('Habits');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.loose} source={require('../../assets/Loose.png')} />
      <View style={styles.inputView}>
        <TextInput
          testID='email-input-register'
          ref={clearEmail}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={clearPassword}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="PASSWORD"
          placeholderTextColor="#353535"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Image style={styles.register} source={require('../../assets/RegisterButton.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace('Login');
        }}
      >
        <Image style={styles.orLogin} source={require('../../assets/OrLogin.png')} />
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
  loose: {
    position: 'absolute',
    bottom: '52.5%',
    width: 200,
    height: 300,
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
  textInput: {
    flex: 1,
    alignItems: 'stretch',
  },
  button: {
    bottom: '-20%',
  },
  orLogin: {
    bottom: -120,
    width: 80,
    height: 50,
  },
});
