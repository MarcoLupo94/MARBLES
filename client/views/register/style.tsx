import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7197AC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loose: {
        position: 'absolute',
        bottom: '52.5%',
        width: 200,
        height: 300,
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
    textInput: {
        flex: 1,
        alignItems: 'stretch',
    },
    button: {
        bottom: '-20%',
    },
    register: {

    },
    orLogin: {
        top: 50,
        width: 80,
        height: 50,
    },
});
