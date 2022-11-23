
import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import BottomNav from '../../components/BottomNav/BottomNav';
import HabitList from '../../components/HabitList/HabitList';
import HorizontalCalendar from '../../components/HorizontalCalendar/HorizontalCalendar';
import styles from './style';

export default function Habits({ navigation }) {
  const today: Date = new Date();
  today.setHours(23, 59, 59, 999);

  const [selectedDate, setSelectedDate] = useState<Date>(today);


  return (
    <SafeAreaView style={styles.container}
    >
      <HorizontalCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        navigation={navigation}
        today={today}

      />
      <HabitList
        selectedDate={selectedDate}

      />
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
}
