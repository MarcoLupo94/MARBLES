import { SafeAreaView, Image, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import { useRef, useState } from 'react';
import apiService from '../ApiService';

export default function AddHabit({navigation}){

  const [habit, setHabit] = useState('');

  const clearhabit = useRef();

  const handleSubmit = async () => {
    const habitToSend = {habit};
    if (!habit) {
        alert('Please enter a habit');
    } else {
        const newHabit = await apiService.sendHabits(habitToSend);
        if (newHabit === 'Too many habits') {
          alert('Too many habits');
        }
        navigation.replace('Habits');
        clearhabit.current.clear();
    }
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
      <Image style={styles.addhabit} source={require('../assets/NewHabit.png')}/>
      <View style={styles.inputView}>
        <TextInput
          ref={clearhabit}
          style={styles.TextInput}
          autoCapitalize='characters'
          placeholder="HABIT"
          placeholderTextColor="#353535"
          onChangeText={(habit) => setHabit(habit)}
          />
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          handleSubmit()
        }} 
        >
        <Image style={styles.add} source={require('../assets/AddHabit.png')}/>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7197AC',
  },
  form: {
    width: 350,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '35%',
    left: '5%'
  },
  addhabit: {
    position: 'absolute',
    height: 200,
    width: 250,
    bottom: '60%',
    right: '0%'
  },
  inputView: {
    bottom: '-10%',
    backgroundColor: "#D9D9D9",
    opacity: 0.5,
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    flex: 1,
    alignItems: 'stretch'
  },
  button: {
    bottom: '-10%',
  },
  add: {
    height: 40,
    width: 50
  }
})