import { Pressable , SafeAreaView, Image } from 'react-native';

export default function CalendarHeader({ scrollToToday, addHabit }) {
  return (
    <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Pressable onPress={scrollToToday} testID="button-1">
        <Image source={require('../../assets/Today.png')} />
      </Pressable>
      <Pressable onPress={addHabit} testID="button-2">
        <Image source={require('../../assets/Add.png')} style={{ top: 7 }} />
      </Pressable>
    </SafeAreaView>
  );
}
