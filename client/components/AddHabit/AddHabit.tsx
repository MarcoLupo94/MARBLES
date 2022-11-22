import { SafeAreaView, Image, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import * as apiService from '../../ApiService';
import styles from './style'
import { userContext } from '../../user-context';
export default function AddHabit({ navigation, testfn }) {
  const [habit, setHabit] = useState<string>('');
  const [user,setUser] = useContext(userContext)

  const handleSubmit = async () => {
    if (habit === '') {
      Alert.alert('Please enter a habit');
    } else {
      testfn()
      const updatedUser = await apiService.sendHabits(habit , user.id);
      setUser(updatedUser)
      navigation.replace('Habits');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Image style={styles.addhabit} source={require('../../assets/NewHabit.png')} />
        <View style={styles.inputView}>
          <TextInput
            testID='input'
            style={styles.TextInput}
            autoCapitalize="characters"
            placeholder="HABIT"
            placeholderTextColor="#353535"
            onChangeText={(habit) => setHabit(habit)}
            value={habit}
          />
        </View>
        <Pressable
          testID='submit'
          style={styles.button}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Image style={styles.add} source={require('../../assets/AddHabit.png')} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

