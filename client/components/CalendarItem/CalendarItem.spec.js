import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import CalendarItem from './CalendarItem';

const mockDate = new Date();
const mockDayNumber = mockDate.getDate();
const mockdayString = mockDate.toString().split(' ')[0];

const mockFn = jest.fn();

describe('Calendar-item', () => {
  test('Should render properly', () => {
    const component = render(<CalendarItem date={mockDate} selectedDate={mockDate} />);
    expect(component).toBeTruthy();
  });
  test('Should render proper date', () => {
    const component = render(<CalendarItem date={mockDate} selectedDate={mockDate} />);
    expect(component.getByText(`${mockDayNumber}`)).toBeTruthy();
    expect(component.getByText(`${mockdayString}`)).toBeTruthy();
  });
});
