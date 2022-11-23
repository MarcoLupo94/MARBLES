import { SafeAreaView, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useState, useContext } from 'react';
import * as apiService from '../../ApiService';
import { Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import styles from './style';
import { userContext } from '../../user-context';



export default function Login({ navigation }) {
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user;
      const updatedUser = await apiService.login({ userId: firebaseUser.uid, email: email, habits: [] })
      setUser(updatedUser)
      navigation.replace('Habits');

    } catch (error) {
      Alert.alert(error.message.slice(9))
    }


  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.text} source={require('../../assets/Frame.png')} />
      <Image style={styles.marble} source={require('../../assets/Marbles.png')} />
      <View style={styles.inputView}>
        <TextInput
          testID="email-input"
          style={styles.TextInput}
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
          testID="password-input"
          style={styles.TextInput}
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
        testID="login-button"
        style={styles.button}
        onPress={() => handleSubmit()}
        accessible={true}
        accessibilityLabel="Login button"
        accessibilityHint="press to log in"
        accessibilityLanguage="en-US">


        <Image style={styles.login} source={require('../../assets/Group.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        testID="register-button"
        style={styles.button}
        onPress={() => {
          navigation.replace('Register');
        }}
        accessible={true}
        accessibilityLabel="Register page button"
        accessibilityHint="press to go to the register page"
        accessibilityLanguage="en-US"
      >
        <Image style={styles.register} source={require('../../assets/Register.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

