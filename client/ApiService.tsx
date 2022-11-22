import { REACT_APP_LOCAL_IP } from '@dotenv';
import { User, Habit } from '../lib/api-intefaces'




export const register = async (user: User) => {
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
     console.log(err);
     return "Something went wrong!"
  }
};

export const login = async (user: User) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/login`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
     console.log(err);
     return "Something went wrong!"

  }
};

export const sendHabits = async (habit: string, userId : string) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({habit , userId}),
    });
    return await res.json();
  } catch (err) {
     console.log(err);
     return "Something went wrong!"

  }
};

// export const getHabits = async (selectedDate) => {
//   try {
//     const res = await fetch(`${REACT_APP_LOCAL_IP}/habits`, {
//       method: 'PUT',
//       credentials: 'include',
//       mode: 'cors',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ selectedDate }),
//     });
//     return await res.json();
//   } catch (err) {
//     return console.log(err);
//   }
// };

export const deleteHabits = async (id : string) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const completeHabits = async (id: string, selectedDate : Date) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits/complete/${id}`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedDate }),
    });
    return await res.text();
  } catch (err) {
     console.log(err);
     return "Something went wrong!"

  }
};

