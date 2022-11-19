
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    height: hp('70%'),
    width: wp('85%'),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
