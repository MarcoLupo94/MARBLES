import { enableFetchMocks, enableMocks } from 'jest-fetch-mock';
enableFetchMocks();
enableMocks();
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
