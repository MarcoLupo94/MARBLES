import { REACT_APP_LOCAL_IP } from '@dotenv';
// TODO CLEAN CODE AND MAKING ASYNC AWAIT & CONVERT TO export const register => {}
const apiService = {};

apiService.register = async (user) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/register`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

apiService.login = async (user) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/login`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

apiService.sendHabits = async (habits) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(habits),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

apiService.getHabits = async (selectedDate) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedDate }),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

apiService.deleteHabits = async (habit, selectedDate) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits/delete/${habit.id}`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedDate }),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

apiService.completeHabits = async (habit, selectedDate) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits/complete/${habit.id}`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedDate }),
    });
    return await res.text();
  } catch (err) {
    return console.log(err);
  }
};

export default apiService;
