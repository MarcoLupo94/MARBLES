import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import CalendarHead from './CalendarHeader';

const mockFn = jest.fn();
describe('CalendarHead', () => {
  test('Should render', () => {
    expect(render(<CalendarHead scrollToToday={mockFn} addHabit={mockFn} />)).toBeTruthy();
  });
  test('should call scrollToToday on press', () => {
    const component = render(<CalendarHead scrollToToday={mockFn} addHabit={mockFn} />);
    const button = component.getByTestId('button-1');
    expect(mockFn).not.toHaveBeenCalled();
    fireEvent.press(button);
    expect(mockFn).toHaveBeenCalled();
    fireEvent.press(button);
    fireEvent.press(button);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
  test('should call addHabit on press', () => {
    const component = render(<CalendarHead scrollToToday={mockFn} addHabit={mockFn} />);
    const button = component.getByTestId('button-2');
    expect(mockFn).not.toHaveBeenCalled();
    fireEvent.press(button);
    expect(mockFn).toHaveBeenCalled();
    fireEvent.press(button);
    fireEvent.press(button);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});
