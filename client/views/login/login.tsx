import { SafeAreaView, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useState, useRef, useContext } from 'react';
import * as apiService from '../../ApiService';
import { Alert } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import styles from './style';
import { userContext } from '../../user-context';


// // TODO: Replace the following with your app's Firebase project configuration

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInput = useRef<any>();
  const passwordInput = useRef<any>();

  const { user, setUser } = useContext(userContext);

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert('Please enter email address');
      return;
    }
    if (!password) {
      Alert.alert('Please enter password');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const firebaseUser = userCredential.user;
        if (firebaseUser) {
          //should make APIcall, get the user obj with habits in it
          //setuser(returnedUser)
          navigation.replace('Habits');

        }
      })
      .catch((error) => {
        Alert.alert(error.message.slice(9))
        emailInput.current.clear();
        passwordInput.current.clear();
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.text} source={require('../../assets/Frame.png')} />
      <Image style={styles.marble} source={require('../../assets/Marbles.png')} />
      <View style={styles.inputView}>
        <TextInput
          testID="email-input"
          ref={emailInput}
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          testID="password-input"
          ref={passwordInput}
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder="PASSWORD"
          placeholderTextColor="#353535"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity testID="login-button" style={styles.button} onPress={() => handleSubmit()}>
        <Image style={styles.login} source={require('../../assets/Group.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        testID="register-button"
        style={styles.button}
        onPress={() => {
          navigation.replace('Register');
        }}
      >
        <Image style={styles.register} source={require('../../assets/Register.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

