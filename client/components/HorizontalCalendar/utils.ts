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

export { dateSubtractDays, dateAddDays, generateHorizontalCalendarDates };
