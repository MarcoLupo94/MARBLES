import { Text, Pressable } from 'react-native';
import styles from './style'

export default function CalendarItem ({ date , selectedDate, setSelectedDate }) {
  const dayNumber = date.getDate();
  // console.log(date)
  const dayString : String = date.toString().split(' ')[0];
  const isActive : Boolean = (
    selectedDate.getDate() === date.getDate() &&
    selectedDate.toString().split(' ')[1] === date.toString().split(' ')[1]
  )

  return (
    <Pressable
      onPress={() => setSelectedDate(date)}
      testID="button"
      style={[styles.date, isActive && { backgroundColor: '#B0C2CA'}]}
    >
      <Text style={[styles.dateOutput, isActive && styles.activeText]}>
        {dayNumber}
      </Text>
      <Text style={[styles.dayStyle, isActive && styles.activeText]}>
        {dayString}
      </Text>
    </Pressable>
  );
};


