
 import {StyleSheet }from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7197AC',
  },
  form: {
    width: 350,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '35%',
    left: '5%',
  },
  addhabit: {
    position: 'absolute',
    height: 200,
    width: 250,
    bottom: '60%',
    right: '0%',
  },
  inputView: {
    bottom: '-10%',
    backgroundColor: '#D9D9D9',
    opacity: 0.5,
    borderRadius: 30,
    width: '70%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    flex: 1,
    alignItems: 'stretch',
  },
  button: {
    bottom: '-10%',
  },
  add: {
    height: 40,
    width: 50,
  },
});
