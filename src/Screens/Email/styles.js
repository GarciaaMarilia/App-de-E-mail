import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    appbar: {
        backgroundColor: '#363636'
    },

    box: {
        fontWeight: 'bold',
        color: '#FFFAFA',
        fontSize: 24,
        margin: 12
    },

    title: {
        fontWeight: 'bold',
        color: '#FFFAFA',
        fontSize: 20,
        margin: 12
    },

    header: {
        flexDirection: 'row',
        padding: 10
    },

    image: {
        paddingHorizontal: 20,
        borderRadius: 100,
        marginRight: 15,
        height: 60,
        width: 60
    },


    time: {
        textAlign: 'right',
        color: '#fff',
        flex: 1
    },

    to: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff',
        fontSize: 16
    },

    webview: {
        backgroundColor: '#DCDCDC',
        flex: 1
    },
});