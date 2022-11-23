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
  const [user, setUser] = useContext<any>(userContext);


  const handleSubmit = async () => {


    if (!email) {
      Alert.alert('Please enter email address');
      return;
    }
    if (!password) {
      Alert.alert('Please enter password');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user;
      //should make APIcall, get the user obj with habits in it
      const updatedUser = await apiService.register({ userId: firebaseUser.uid, email: email, habits: [] })
      setUser(updatedUser)
      navigation.replace('Habits');

    } catch (error) {
      Alert.alert(error.message.slice(9))
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.loose} source={require('../../assets/Loose.png')} />
      <View style={styles.inputView}>
        <TextInput
          testID="email-input-register"
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
          accessible={true}
          accessibilityLabel="Email input box"
          accessibilityHint="Put the email of your email-password pair here"
          accessibilityLanguage="en-US"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="PASSWORD"
          placeholderTextColor="#353535"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          accessible={true}
          accessibilityLabel="Password input box"
          accessibilityHint="Put the password of your email-password pair here"
          accessibilityLanguage="en-US"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit();
        }}
        accessible={true}
        accessibilityLabel="Register button"
        accessibilityHint="Press to register"
        accessibilityLanguage="en-US"
      >
        <Image style={styles.register} source={require('../../assets/RegisterButton.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace('Login');

        }}
        accessible={true}
        accessibilityLabel="Login page button"
        accessibilityHint="Press to go to the login page"
        accessibilityLanguage="en-US"
      >
        <Image style={styles.orLogin} source={require('../../assets/OrLogin.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
