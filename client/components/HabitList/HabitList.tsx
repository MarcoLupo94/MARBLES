import { useContext } from 'react';
import { Pressable, View } from 'react-native';
import { Habit } from '../../../lib/api-intefaces';
import * as apiService from '../../ApiService';
import { userContext } from '../../user-context';
import HabitItem from '../HabitItem/HabitItem';
import styles from './style'

export default function HabitList({ selectedDate }) {

  const [user ,setUser] = useContext(userContext)
  const {habits} = user;

  const handleDelete = async (habit_id:string) => {
    try {
      const updatedUser = await apiService.deleteHabits(habit_id);
     setUser(updatedUser)
    } catch (e) {
      console.log(e)
    }
  };
  return (
    <View style={styles.container} testID="container">
      {habits &&
        habits.map((habit: Habit) => {
          return (
            <Pressable onLongPress={() => handleDelete(habit.id)} key={habit.id} testID={`habit${habit.id}`}>
              <HabitItem habit={habit} selectedDate={selectedDate} key={habit.id} />
            </Pressable>
          );
        })}
    </View>
  );
}
