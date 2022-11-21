import { StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState, useRef, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import * as apiService from '../../ApiService';
import styles from './style';
import { User } from '../../../lib/api-intefaces';
import { userContext } from '../../user-context';

// TODO TEST CODE / CLEAN CODE / LATER IMPLEMENT REDUX + REFACTOR CSS IN A DIFFERENT FILE=TESTING/CSS/COMPONENT
export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(userContext)
  // const [user, setUser] = useState<User>({ id: "", email: "", habits: [] });

  const clearEmail = useRef();
  const clearPassword = useRef();

  const handleSubmit = async () => {
    console.log(user)
    console.log(setUser)

    if (!email) {
      Alert.alert('Please enter email address');
      return;
    }
    if (!password) {
      Alert.alert('Please enter password');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const firebaseUser = userCredential.user;
        if (firebaseUser) {
          console.log(setUser)
          console.log(user)
          apiService.register({ id: user.uid, email: email, habits: [] }).then(res => setUser(res)).catch((error) => { console.log(error) })
          // setUserID(user.uid);
          // const userDataRegister = { email: email, id: userID };
          // apiService.register(userDataRegister).then(navigation.replace('Habits')).catch((error) => { Alert.alert(error) })

        }



        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(error.message.slice(9))
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
          testID="email-input-register"
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
