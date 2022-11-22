import { SafeAreaView, Image, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState, useRef, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import * as apiService from '../../ApiService';
import styles from './style';
import { userContext } from '../../user-context';


export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInput = useRef<any>();
  const passwordInput = useRef<any>();

  const { user, setUser } = useContext(userContext);


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
          apiService.register({ id: user.uid, email: email, habits: [] }).then(res => setUser(res)).catch((error) => { console.log(error) })
        }

      })
      .catch((error) => {
        Alert.alert(error.message.slice(9))
        emailInput.current.clear();
        passwordInput.current.clear();

      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.loose} source={require('../../assets/Loose.png')} />
      <View style={styles.inputView}>
        <TextInput
          testID="email-input-register"
          ref={emailInput}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={passwordInput}
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
