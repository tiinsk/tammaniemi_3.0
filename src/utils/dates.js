import fiLocale from 'date-fns/locale/fi';
import { format, startOfWeek, endOfWeek, eachDay, lastDayOfMonth, lastDayOfWeek, isSameDay, addDays, differenceInCalendarDays, isBefore } from 'date-fns';

export const monthShort = (date) => {
  return format(date, 'MMM', {locale: fiLocale});
};

export const beginningOfMonth = (year, month) => {
  return startOfWeek(new Date(year, month, 1), {weekStartsOn: 1})
};

export const endOfMonth = (year, month) => {
  return addDays(beginningOfMonth(year, month), 41);
  //return endOfWeek(lastDayOfMonth(new Date(year, month, 1)), {weekStartsOn: 1})
};

export const eachDayOfCalendarMonth = (year, month) => {
  return eachDay(beginningOfMonth(year, month), endOfMonth(year, month)).map(day => format(day, 'YYYY-MM-DD'));
};

export const monthText = (month) => {
  return format(new Date(1970, month), 'MMMM', {locale: fiLocale});
};

export const weekdays = () => {
  return ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'];
};

export const splittedReservations = (reservations) => {
  let splitted = {};
  reservations.forEach(reservation => {
    const begin = reservation.begin;
    const end = reservation.end;

    splitted = {...splitted, ...split(begin, end, reservation)};
  });
  return splitted;
};

const split = (begin, end, reservation) => {

  const lastDay = format(lastDayOfWeek(begin, {weekStartsOn: 1}), 'YYYY-MM-DD');

  if(isSameDay(end, lastDay) || isBefore(end, lastDay)) {
    return {
      [begin]: {
        weekBegin: begin,
        weekEnd: end,
        ending: true,
        beginning: begin === reservation.begin,
        length: differenceInCalendarDays(end, begin) +1,
        ...reservation
      }
    }
  }

  const newBegin = format(addDays(lastDay, 1), 'YYYY-MM-DD');

  return {
    [begin]: {
      weekBegin: begin,
      weekEnd: lastDay,
      ending: lastDay === reservation.end,
      beginning: begin === reservation.begin,
      length: differenceInCalendarDays(lastDay, begin) +1,
      ...reservation
    },
    ...split(newBegin, end, reservation)
  };
};
