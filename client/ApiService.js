import { REACT_APP_LOCAL_IP } from '@dotenv';
const BASE_URL = REACT_APP_LOCAL_IP;
// TODO CLEAN CODE AND MAKING ASYNC AWAIT & CONVERT TO export const register => {}
const apiService = {};

apiService.register = (user) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.sendHabits = (habits) => {
  return fetch(`${BASE_URL}/habits`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(habits),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.getHabits = (selectedDate) => {
  return fetch(`${BASE_URL}/habits`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedDate }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.deleteHabits = (habit, selectedDate) => {
  return fetch(`${BASE_URL}/habits/delete/${habit.id}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedDate }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.completeHabits = (habit, selectedDate) => {
  return fetch(`${BASE_URL}/habits/complete/${habit.id}`, {
    method: 'PUT',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedDate }),
  })
    .then((res) => res.text())
    .catch((err) => console.log(err));
};

export default apiService;
