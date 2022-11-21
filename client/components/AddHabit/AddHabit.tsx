import { SafeAreaView, Image, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import * as apiService from '../../ApiService';
import styles from './style'
export default function AddHabit({ navigation, testfn }) {
  const [habit, setHabit] = useState<string>('');


  const handleSubmit = async () => {
    if (habit === '') {
      Alert.alert('Please enter a habit');
    } else {
      testfn()
      const newHabit = await apiService.sendHabits({ habit });
      if (newHabit === 'Too many habits') {
        Alert.alert('Too many habits');
      }
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

