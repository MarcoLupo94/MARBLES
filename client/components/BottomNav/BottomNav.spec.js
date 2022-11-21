import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import BottomNav from './BottomNav';

describe('Nav', () => {
  const mockFn = jest.fn();
  test('Should render properly', () => {
    const component = render(<BottomNav date={mockDate} testFn={mockFn} />);
    expect(component).toBeTruthy();
  });
  test('should call handleLogout on press', () => {
    const component = render(<BottomNav date={mockDate} testFn={mockFn} />);

    const button = component.getByTestId('button1');
    const button2 = component.getByTestId('button2');
    const button3 = component.getByTestId('button3');

    fireEvent.press(button);
    expect(mockFn).toHaveBeenCalled();
    fireEvent.press(button2);
    expect(mockFn).toHaveBeenCalledTimes(2);
    fireEvent.press(button3);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});
