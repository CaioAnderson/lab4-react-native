import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    function handleScreenCadastro(){
        navigation.navigate('Cadastro');
    }

    function handleScreenIMC(){
        navigation.navigate('IMC');
    }

    function handleScreenSobre(){
        navigation.navigate('Sobre', {});
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleScreenCadastro} >
                <Text style={styles.textButton}>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleScreenIMC} >
                <Text style={styles.textButton}>IMC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleScreenSobre} >
                <Text style={styles.textButton}>Sobre</Text>
            </TouchableOpacity>
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
    button: {
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

