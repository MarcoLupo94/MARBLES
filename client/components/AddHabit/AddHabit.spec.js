import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AddHabit from './AddHabit';

const mockFn = jest.fn();
describe('AddHabit component', () => {
  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify({}));
  });
  test('Should render properl', () => {
    const add = render(<AddHabit />);
    expect(add.getByPlaceholderText('HABIT'));
    expect(add).toBeTruthy();
  });
  test('habit value should change when user types', () => {
    const add = render(<AddHabit />);
    const input = add.getByTestId('input');
    fireEvent.changeText(input, 'shower');
    expect(input.props.value).toBe('shower');
    fireEvent.changeText(input, 'eat');
    expect(input.props.value).not.toBe('shower');
    expect(input.props.value).toBe('eat');
  });
  test('should call handleSubmit on submit', async () => {
    const add = render(<AddHabit testfn={mockFn} />);
    const button = add.getByTestId('submit');
    const input = add.getByTestId('input');

    fireEvent.changeText(input, 'eat');
    fireEvent.press(button);
    fireEvent.press(button);
    fireEvent.press(button);

    expect(mockFn).toHaveBeenCalledTimes(3);
  });
  test('should not call API if input is empty', async () => {
    const add = render(<AddHabit testfn={mockFn} />);
    const button = add.getByTestId('submit');
    const input = add.getByTestId('input');

    fireEvent.changeText(input, '');
    fireEvent.press(button);

    expect(mockFn).not.toHaveBeenCalled();
  });
});
