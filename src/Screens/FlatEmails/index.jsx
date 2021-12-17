import
React,
{
    useEffect,
    useState
} from 'react';
import {
    FlatList,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { ListDivider } from '../../Components/ListDivider/ListDivider';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';


export default function FlatEmails({ navigation }) {

    const [emails, setEmails] = useState([]);

    useEffect(function () {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
            const emailsServidor = await response.json();
            setEmails(emailsServidor)
        }
        getData();
    }, [])

    function renderItem({ item }) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.email}
                onPress={() => navigation.navigate("Email", { id: item.id },)}
            >
                <View style={styles.container}>

                    <View>
                        <View style={styles.header}>

                            <Image
                                style={styles.image}
                                source={{ uri: item.picture }}
                            />

                            <View style={styles.title}>

                                <Text style={styles.to}> {item.to} </Text>
                                <Text style={styles.to}> {item.tittle} </Text>

                            </View>

                            <AntDesign
                                name={emails.star ? "star" : "staro"}
                                size={20}
                                color="white"
                            />
                            <Text style={styles.time}>{item.time}</Text>

                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }

    return (
        <LinearGradient
            colors={['#1C1C1C', '#363636']}
            style={{ flex: 1 }}
        >
            <View style={styles.flatlist}>
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
        </LinearGradient>
    );
}