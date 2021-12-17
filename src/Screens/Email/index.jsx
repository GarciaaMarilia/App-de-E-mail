import
React,
{
    useEffect,
    useState
} from 'react';
import {
    Image,
    View,
    Text,
    StatusBar
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { styles } from './styles';
import { Appbar } from 'react-native-paper';


export default function Email({ route, navigation }) {

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
        <View style={styles.container}>

            <StatusBar style="auto" />

            <Appbar.Header style={styles.appbar}>
                <Appbar.BackAction onPress={() => navigation.navigate("FlatEmails")} />
                <Text style={styles.box} >Caixa de Entrada</Text>
            </Appbar.Header>

            <View style={styles.appbar}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                >
                    <Text style={styles.title}>{email.tittle}</Text>
                    <AntDesign
                        name={email.star ? "star" : "staro"}
                        size={20}
                        color="white"
                    />
                </View>
                <View style={styles.header}>

                    <Image
                        style={styles.image}
                        source={{ uri: email.picture }}
                    />

                    <View style={styles.from}>

                        <Text style={styles.to}> {email.from}</Text>
                        <Text style={styles.to}>{email.to}</Text>

                    </View>

                    <Text style={styles.time}>{email.time}</Text>

                </View>

            </View>

            <WebView
                style={styles.webview}
                source={{ html: `<div style="font-size: 50px;">${email.body}</div>` }}
            />

        </View >
    );
}