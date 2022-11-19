import { TouchableOpacity, SafeAreaView, Image } from 'react-native';

export default function CalendarHeader({ scrollToToday, addHabit }) {
  return (
    <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <TouchableOpacity onPress={scrollToToday}>
        <Image source={require('../../assets/Today.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={addHabit}>
        <Image source={require('../../assets/Add.png')} style={{ top: 7 }} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
