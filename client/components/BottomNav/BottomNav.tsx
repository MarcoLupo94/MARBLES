import { Pressable, View, Image } from 'react-native';
import { auth } from '../../firebaseConfig'
import { signOut } from "firebase/auth";
import styles from './style'
export default function BottomNav({ navigation }) {


  const handleLogout = () => {

    signOut(auth).then(() => {
      navigation.replace('Login')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => navigation.replace('Calendar')} testID="button-1"
        accessible={true}
        accessibilityLabel="Open Calender Button"
        accessibilityHint="open the big calender"
        accessibilityLanguage="en-US">
        <Image style={styles.calendar} source={require('../../assets/Calendar.png')} />
      </Pressable>
      <Pressable onPress={() => navigation.replace('Habits')} testID="button-2"
        accessible={true}
        accessibilityLabel="Main page button"
        accessibilityHint="Return to the main page"
        accessibilityLanguage="en-US">
        <Image style={styles.update} source={require('../../assets/Update.png')} />
      </Pressable>
      <Pressable onPress={() => handleLogout()} testID="button-3"
        accessible={true}
        accessibilityLabel="Logout button"
        accessibilityHint="Press to log out"
        accessibilityLanguage="en-US">
        <Image style={styles.logout} source={require('../../assets/LogOut.png')} />
      </Pressable>
    </View>
  );
}

