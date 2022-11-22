import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, createContext } from 'react';
import Login from './views/login/login';
import Calendar from './views/calendar/calendar';
import Habits from './views/habits/habits';
import Register from './views/register/register';
import AddHabit from './components/AddHabit/AddHabit';
import { User } from '../lib/api-intefaces';
import { userContext } from './user-context';

// TODO  a separate router component file && check
const Stack = createStackNavigator();
function MyStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Habits" component={Habits} />
      <Stack.Screen name="AddHabit" component={AddHabit} />
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>

  );
}


export default function App() {

  const user= useState<User>({ id: "", email: "", habits: [] });
  return (
    <NavigationContainer>
      <userContext.Provider value={user} >
        <MyStack />
      </userContext.Provider>
    </NavigationContainer>
  );
}
