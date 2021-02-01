import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

export default function Sobre(props) {

    const { nome, idade, email } = props.route.params;

    const navigation = useNavigation();

    function handleScreenHome(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/originals/89/64/99/8964998576cfac440b3a14df748fc670.png' }} />
                <Text style={styles.text}><Text style={styles.bold}>Nome: </Text>{nome}</Text>
                <Text style={styles.text}><Text style={styles.bold}>Idade: </Text>{idade}</Text>
                <Text style={styles.text}><Text style={styles.bold}>Email: </Text>{email}</Text>

                <TouchableOpacity style={styles.button} onPress={handleScreenHome}>
                    <Text style={styles.textButton}>Ok</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    content: {
        alignItems: 'center',
        marginTop: 100,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,

        elevation: 10
    },
    image: {
        marginBottom: 30,
        height: 150,
        width: 150
    },
    text: {
        fontSize: 16,
        marginVertical: 10
    },
    bold: {
        fontWeight: 'bold'
    },
    button: {
        marginTop: 30,
        backgroundColor: '#15141e',
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 80,

        borderRadius: 20,

    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

