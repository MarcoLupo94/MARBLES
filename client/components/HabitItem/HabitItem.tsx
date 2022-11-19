import { useEffect, useState } from 'react';
import { Image, Text, Pressable, View, Alert } from 'react-native';
import { Habit } from '../../../lib/api-intefaces';
import apiService from '../../ApiService';
import styles from './style';

export default function Habits({ habitName, selectedDate, getHabits }) {
  const [check, setCheck] = useState<boolean>();

  useEffect(() => {
    setCheck(habitName.completed.some((dateStr : string) => dateStr === selectedDate.toISOString()));
  }, [habitName]);

  const handleCheck = async (habitName : Habit) => {
    try {
      setCheck(true);
      await apiService.completeHabits(habitName, selectedDate);
    } catch (e) {
      Alert.alert('Soemthing went wrong');
    }
    getHabits();
  };

  return (
    <View style={styles.habit}>
      {check ? (
        <Pressable>
          <Image testID="img" style={styles.tick} source={require('../../assets/TickDone.png')} />
        </Pressable>
      ) : (
        <Pressable onPress={() => handleCheck(habitName)}>
          <Image testID="img" style={styles.tick} source={require('../../assets/Tick.png')} />
        </Pressable>
      )}
      <Text style={styles.text}>{habitName.habit}</Text>
    </View>
  );
}
