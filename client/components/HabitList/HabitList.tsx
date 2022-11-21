import { Pressable, View } from 'react-native';
import { Habit } from '../../../lib/api-intefaces';
import * as apiService from '../../ApiService';
import HabitItem from '../HabitItem/HabitItem';
import styles from './style'

export default function HabitList({ habits, selectedDate, getHabits }) {
  const handleDelete = async (habitName : Habit) => {
    try{
      await apiService.deleteHabits(habitName, selectedDate);
      getHabits();
    }catch(e){
      console.log(e)
    }
  };
  return (
    <View style={styles.container} testID="container">
      {habits &&
        habits.map((habitName :Habit) => {
          return (
            <Pressable onLongPress={() => handleDelete(habitName)} key={habitName.id} testID={`habit${habitName.id}`}>
              <HabitItem habitName={habitName} selectedDate={selectedDate} getHabits={getHabits} key={habitName.id}/>
            </Pressable>
          );
        })}
    </View>
  );
}
