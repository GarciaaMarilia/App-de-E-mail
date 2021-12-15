import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ListDivider } from '../../Components/ListDivider/ListDivider';

import { styles } from './styles';

export default function FlatEmails() {

    const [emails, setEmails] = useState([]);

    useEffect(function () {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
            const emailsServidor = await response.json();
            console.log(emailsServidor)
            setEmails(emailsServidor)
        }
        getData();
    }, [])

    function renderItem({ item }) {
        return (
            <View style={styles.container}>
                <View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Image style={styles.image} source={{ uri: item.picture }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.to}> {item.to} </Text>
                            <Text style={styles.to}> {item.tittle} </Text>
                        </View>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <LinearGradient
            colors={['#242424', '#424242']}
            style={{ flex: 1 }}
        >
            <View style={{ marginTop: 30 }}>
                <FlatList
                    data={emails}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => <ListDivider />}
                    ListFooterComponent={() => <ListDivider />}
                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </LinearGradient >
    );
}