import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import HorizontalCalendar from '../../components/HorizontalCalendar/HorizontalCalendar';
import HabitList from '../../components/HabitList/HabitList';
import BottomNav from '../../components/BottomNav/BottomNav';
import apiService from '../../ApiService';
import styles from './style';
import {Habit} from '../../../lib/api-intefaces'

export default function Habits({ navigation }) {
  const today : Date = new Date();
  today.setHours(23, 59, 59, 999);

  const [selectedDate, setSelectedDate]  = useState<Date>(today);
  // const [user , setUser] = useState<User>({})
  const [habits, setHabits] = useState<Habit[]>([]);

  const getHabits = async () => {
    const updatedHabits = await apiService.getHabits(selectedDate);
    setHabits(updatedHabits);
  };
// TODO SEND REQUEST WITH USER INFOS  === >  RETURN USER ====> STORE USEER setUser ({userFromDatabase}) RENAME TO HOMEPAGE
  useEffect(() => {
    getHabits();
  }, [selectedDate]);

  return (
    <SafeAreaView style={styles.container}
    >
      <HorizontalCalendar
        testID='calendar'
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        navigation={navigation}
        today={today}
      />
      <HabitList
        testID='habit-list'
        habits={habits}
        setHabits={setHabits}
        selectedDate={selectedDate}
        getHabits={getHabits}
      />
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
}
