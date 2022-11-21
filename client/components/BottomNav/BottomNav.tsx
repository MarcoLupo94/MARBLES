import { Pressable, View, Image } from 'react-native';
import { auth } from '../../firebaseConfig'
import { signOut } from "firebase/auth";
import styles from './style'
export default function BottomNav({ navigation , testFn }) {


  const handleLogout =  () => {
    testFn()
    signOut(auth).then(() => {
      navigation.replace('Login')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => navigation.replace('Calendar')} testID="button-1">
        <Image style={styles.calendar} source={require('../../assets/Calendar.png')} />
      </Pressable>
      <Pressable onPress={() => navigation.replace('Habits')} testID="button-2">
        <Image style={styles.update} source={require('../../assets/Update.png')} />
      </Pressable>
      <Pressable onPress={() => handleLogout()} testID="button-3">
        <Image style={styles.logout} source={require('../../assets/LogOut.png')} />
      </Pressable>
    </View>
  );
}

