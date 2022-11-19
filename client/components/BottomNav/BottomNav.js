import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

export default function BottomNav({ navigation }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.replace('Calendar')}>
        <Image style={styles.calendar} source={require('../../assets/Calendar.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Habits')}>
        <Image style={styles.update} source={require('../../assets/Update.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Login')}>
        <Image style={styles.logout} source={require('../../assets/LogOut.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    bottom: 0,
    width: '100%',
    height: '10%',
    backgroundColor: '#7197AC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    display: 'absolute',
  },
  calendar: {
    height: 35,
    width: 35,
  },
  update: {
    height: 35,
    width: 35,
  },
  logout: {
    height: 35,
    width: 30,
  },
});
