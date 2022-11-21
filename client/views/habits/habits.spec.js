import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import React from 'react';
import Habits from './habits';
import renderer from 'react-test-renderer';
import { render, waitFor } from '@testing-library/react-native';
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
describe('Habits component', () => {
  test('Habits renders correctly', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockHabits));
    const component = render(<Habits />);
    await waitFor(() => {
      expect(component).toBeTruthy();
    });
  });
});
