import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import HorizontalCalendar from './HorizontalCalendar';

const mockFn = jest.fn();
const mockDate = new Date();
describe('Horizonal calendar', () => {
  test('Should render', () => {
    expect(
      render(
        <HorizontalCalendar selectedDate={mockDate} vsetSelectedDate={mockFn} today={mockDate} />
      )
    ).toBeTruthy();
  });
});
