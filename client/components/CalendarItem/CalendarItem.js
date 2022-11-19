import { Text, Pressable, StyleSheet } from 'react-native';

export default function CalendarItem ({ date, selectedDate, setSelectedDate }) {
  const dayNumber = date.getDate();
  const dayString = date.toString().split(' ')[0];
  const isActive = (
    selectedDate.getDate() === date.getDate() && 
    selectedDate.toString().split(' ')[1] === date.toString().split(' ')[1]
  )

  return (
    <Pressable
      onPress={() => setSelectedDate(date)}
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

const styles = StyleSheet.create({
  dateOutput: {
    color: '#353535',
    fontSize: 20,
    fontWeight: '900'
  },
  dayStyle: {
    color: '#353535',
    textTransform: 'lowercase'
  },
  activeText: {
    color: '#7197AC'
  },
  date: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
});

