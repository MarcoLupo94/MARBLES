import { Pressable, SafeAreaView, Image } from 'react-native';

export default function CalendarHeader(props) {
  return (
    <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Pressable onPress={props.scrollToToday} testID="button-1"
        accessible={true}
        accessibilityLabel="Go back to today button"
        accessibilityHint="press to go set the date to today"
        accessibilityLanguage="en-US">
        <Image source={require('../../assets/Today.png')} />
      </Pressable>
      <Pressable onPress={props.addHabit} testID="button-2"
        accessible={true}
        accessibilityLabel="Add a habit button"
        accessibilityHint="press to add a habit for this day"
        accessibilityLanguage="en-US">
        <Image source={require('../../assets/Add.png')} style={{ top: 7 }} />
      </Pressable>
    </SafeAreaView>
  );
}
