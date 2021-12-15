import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        width: '95%',
    },

    image: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 100,
        paddingHorizontal: 20,
    },

    header: {
        flexDirection: 'row',
    },

    time: {
        flex: 1,
        color: '#fff',
        textAlign: 'right',
    },

    to: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff'
    }

});