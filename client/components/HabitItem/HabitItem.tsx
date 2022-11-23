import { useContext, useEffect, useState } from 'react';
import { Image, Text, Pressable, View } from 'react-native';
import { Habit } from '../../../lib/api-intefaces';
import * as apiService from '../../ApiService';
import { userContext } from '../../user-context';
import styles from './style';

export default function Habits({ habit, selectedDate }) {
  const [check, setCheck] = useState<boolean>();
  const [user, setUser] = useContext(userContext)

  useEffect(() => {
    setCheck(habit?.completed.some((date: string) => date === selectedDate.toISOString()));
  }, [habit, selectedDate]);

  const handleCheck = async (habit: Habit) => {
    try {

      setCheck(true);
      const updatedUser = await apiService.completeHabits(habit.id, selectedDate);
      setUser(updatedUser)
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <View style={styles.habit}>
      {check ? (
        <Pressable
          accessible={true}
          accessibilityLabel="Habit completed"
          accessibilityHint="A compelted habit"
          accessibilityLanguage="en-US">
          <Image testID="img" style={styles.tick} source={require('../../assets/TickDone.png')}
          />

        </Pressable>
      ) : (
        <Pressable onPress={() => handleCheck(habit)}
          accessible={true}
          accessibilityLabel="Habit to complete"
          accessibilityHint="press to compele this habit for this day"
          accessibilityLanguage="en-US">
          <Image testID="img" style={styles.tick} source={require('../../assets/Tick.png')} />
        </Pressable>
      )}
      <Text style={styles.text}>{habit?.habit}</Text>
    </View>
  );
}
