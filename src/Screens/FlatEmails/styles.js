import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 100,
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        padding: 10,
    },

    image: {
        paddingHorizontal: 20,
        borderRadius: 100,
        marginRight: 15,
        height: 60,
        width: 60
    },

    title: {
        flexDirection: 'column'
    },

    to: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff'
    },

    time: {
        textAlign: 'right',
        color: '#fff',
        flex: 1
    },

    flatlist: {
        marginTop: 40
    }
});