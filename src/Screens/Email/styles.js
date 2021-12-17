import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        padding: 10
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
    },

    box: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFAFA',
        margin: 12
      },
  
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFAFA',
        margin: 12
      },
});