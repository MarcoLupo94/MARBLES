import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import HabitList from './HabitList';

const mockDate = new Date();
const mockHabits = [
  {
    habit: 'shower',
    deletedAt: mockDate,
    completed: [mockDate, mockDate],
    id: '1',
  },
  {
    habit: 'eat',
    deletedAt: mockDate,
    completed: [mockDate, mockDate],
    id: '2',
  },
  {
    habit: 'sleep',
    deletedAt: mockDate,
    completed: [mockDate, mockDate],
    id: '3',
  },
];
const mockFn = jest.fn();

describe('Habit-list component', () => {
  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify({}));
  });
  test('Should properly render with the right number of habits', async () => {
    const list = render(
      <HabitList habits={mockHabits} selectedDate={mockDate} getHabits={() => 1} />
    );

    const habit1 = list.getByText('shower');
    const habit2 = list.getByText('eat');

    const habit3 = list.getByText('sleep');
    const cont = list.getByTestId('container');
    expect(habit1).toBeTruthy();
    expect(habit2).toBeTruthy();
    expect(habit3).toBeTruthy();
    expect(cont).toBeTruthy();
  });
  test('On press it should call delete habit on', async () => {
    const list = render(
      <HabitList habits={mockHabits} selectedDate={mockDate} getHabits={mockFn} />
    );
    const habit = list.getByText('shower');
    expect(habit).toBeTruthy();

    expect(mockFn).not.toHaveBeenCalled();

    await act(() => {
      fireEvent(habit, 'onLongPress');
    });
    expect(mockFn).toHaveBeenCalled();
  });
});
