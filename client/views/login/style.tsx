import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7197AC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marble: {
        position: 'absolute',
        height: 300,
        width: 300,
        bottom: '47.5%',
    },
    text: {
        position: 'absolute',
        bottom: '70%',
    },
    inputView: {
        bottom: '-20%',
        backgroundColor: '#D9D9D9',
        opacity: 0.6,
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
        bottom: '-20%',
    },
    login: {
        height: 50,
        width: 100,
    },
    register: {
        top: 50,
    },
});