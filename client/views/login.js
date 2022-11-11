import { StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const userDataToSend = {email, password};
    if (!email) {
        alert('Please enter email address');
        return;
    }
    if (!password) {
        alert('Please enter password');
        return;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.text} source={require('../assets/Frame.png')}/>
      <Image style={styles.marble} source={require('../assets/output-onlinejpgtools.png')}/>
      <SafeAreaView style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="EMAIL"
          placeholderTextColor="#353535"
          onChangeText={(email) => setEmail(email)}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="PASSWORD"
          placeholderTextColor="#353535"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </SafeAreaView>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handleSubmit()}
      >
        <Image style={styles.login} source={require('../assets/Group.png')}/>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {navigation.navigate('Register')}} 
      >
        <Image style={styles.register} source={require('../assets/Register.png')}/>
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
    bottom: '47.5%'
  },
  text: {
    position: 'absolute',
    bottom: '70%'
  },
  inputView: {
    bottom: '-20%',
    backgroundColor: "#D9D9D9",
    opacity: 0.6,
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  button: {
    bottom: '-20%',
  },
  login: {
    height: 50,
    width: 100
  },
  register: {
    top: 120
  }
});
