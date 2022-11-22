import React from 'react';
import HabitItem from './HabitItem';
import { render, fireEvent } from '@testing-library/react-native';

describe('Habit-Item component', () => {
  const mockDate = new Date();
  const habitName = {
    habit: 'shower',
    deletedAt: mockDate,
    completed: [mockDate, mockDate],
  };
  test('It should render proper habit name', async () => {
    const item = render(
      <HabitItem
        habit={habitName}
        selectedDate={mockDate}
        getHabits={() => {
          return 1;
        }}
      />
    );
    expect(await item.findByText('shower'));
  });
  test('It should render image ', async () => {
    const item = render(
      <HabitItem
        habit={habitName}
        selectedDate={mockDate}
        getHabits={() => {
          return 1;
        }}
      />
    );
    const img = (await item.findByTestId('img')).props;
    expect(img.source.testUri).toContain('../../assets/Tick.png');
  });
  test('On press it should render a different image', async () => {
    const item = render(
      <HabitItem
        habit={habitName}
        selectedDate={mockDate}
        getHabits={() => {
          return 1;
        }}
      />
    );
    const img = await item.findByTestId('img');
    fireEvent.press(img);
    expect(img.props.source.testUri).toContain('../../assets/TickDone.png');
  });
});
