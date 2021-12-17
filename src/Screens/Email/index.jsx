import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, Text, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ListDivider } from '../../Components/ListDivider/ListDivider';

import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

export default function Email({ route }) {

    const { id } = route.params;

    const [email, setEmail] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id);
            const email = await response.json();
            setEmail(email)
        }
        getData();
    }, []);

    return (
        <LinearGradient
            colors={['#1C1C1C', '#363636']}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View>
                    <Text style={styles.box} >Caixa de Entrada</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.title}>{email.tittle}</Text>
                        <AntDesign name={email.star ? "star" : "staro"} size={20} color="white" />
                    </View>
                    <View style={styles.header}>
                        <Image style={styles.image} source={{ uri: email.picture }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.to}> {email.from} </Text>
                        </View>
                        <Text style={styles.time}>{email.time}</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}