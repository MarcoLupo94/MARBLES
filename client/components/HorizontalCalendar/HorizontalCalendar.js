import { useMemo, useRef } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';

import CalendarItem from '../CalendarItem/CalendarItem';
<<<<<<< HEAD

=======
>>>>>>> 41e02c6 (feat(testing/components): almost done testing CalendarItem)
import CalendarHeader from '../CalendarHeader/CalendarHeader.js';

function dateSubtractDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

function dateAddDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function generateHorizontalCalendarDates(datePast, dateFuture) {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  let result = [];
  // adding past days
  for (let i = 0; i < datePast; i++) {
    result[i] = dateSubtractDays(today, i);
  }
  result.reverse();
  // adding future days
  for (let i = 1; i < dateFuture; i++) {
    result.push(dateAddDays(today, i));
  }
  return result;
}

export default function HorizontalCalendar({ selectedDate, setSelectedDate, navigation, today }) {
  const datePast = 180;
  const dateFuture = 90;
  const scroller = useRef();

  const dates = useMemo(() => {
    return generateHorizontalCalendarDates(datePast, dateFuture);
  }, []);

  const scrollToToday = () => {
    scroller.current.scrollTo({ x: datePast * 78.65, y: 0 });
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
