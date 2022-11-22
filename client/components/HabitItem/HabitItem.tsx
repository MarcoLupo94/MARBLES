import { useContext, useEffect, useState } from 'react';
import { Image, Text, Pressable, View, Alert } from 'react-native';
import { Habit } from '../../../lib/api-intefaces';
import * as apiService from '../../ApiService';
import { userContext } from '../../user-context';
import styles from './style';

export default function Habits({ habit, selectedDate }) {
  const [check, setCheck] = useState<boolean>();
  const {setUser} = useContext(userContext)

  useEffect(() => {
    setCheck(habit.completed.some((date: string) => date === selectedDate.toISOString()));
  }, [habit]);

  const handleCheck = async (habit: Habit) => {
    try {
      setCheck(true);
      // TODO API
      const updatedUser = await apiService.completeHabits(habit, selectedDate);
      setUser(updatedUser)
    } catch (e) {
     console.log(e)
    }
  };

  return (
    <View style={styles.habit}>
      {check ? (
        <Pressable>
          <Image testID="img" style={styles.tick} source={require('../../assets/TickDone.png')} />
        </Pressable>
      ) : (
        <Pressable onPress={() => handleCheck(habit)}>
          <Image testID="img" style={styles.tick} source={require('../../assets/Tick.png')} />
        </Pressable>
      )}
      <Text style={styles.text}>{habit.habit}</Text>
    </View>
  );
}
