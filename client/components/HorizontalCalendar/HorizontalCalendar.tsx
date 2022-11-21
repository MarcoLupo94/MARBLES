import { useMemo, useRef } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import { generateHorizontalCalendarDates} from './utils'
import CalendarItem from '../CalendarItem/CalendarItem';
import CalendarHeader from '../CalendarHeader/CalendarHeader';

export default function HorizontalCalendar({ selectedDate, setSelectedDate, navigation, today }) {
  const datePast = 180;
  const dateFuture = 90;
  const scroller = useRef<HTMLInputElement>();
  const options:ScrollToOptions = { top: datePast * 78.65, left: 0 }
  const dates = useMemo(() => {
    return generateHorizontalCalendarDates(datePast, dateFuture);
  }, []);

  const scrollToToday = () => {
    scroller.current.scrollTo(options);
    setSelectedDate && setSelectedDate(today);
  };

  const addHabit = () => {
    navigation.replace('AddHabit');
  };

  return (
    <SafeAreaView>
      <View style={{ height: 130 }}>
        <CalendarHeader
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          scrollToToday={scrollToToday}
          addHabit={addHabit}
        />
        <ScrollView
          testID='scroll'
          ref={scroller}
          onContentSizeChange={() => scrollToToday()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {dates.map((date) => {
            return (
              <CalendarItem
                date={date}
                key={date}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
