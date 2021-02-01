import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [email, setEmail] = useState('');

    function handleScreenSobre(){
        navigation.navigate('Sobre', { nome, idade, email });
    }

    return (
        <View style={styles.container}>
            <View style={styles.areaForm}>
                <View style={styles.linhaForm}>
                    <Text style={styles.textInput}>Nome :</Text>
                    <TextInput style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Digite seu nome"
                    />
                </View>
                <View style={styles.linhaForm}>
                    <Text style={styles.textInput}>Idade :</Text>
                    <TextInput style={styles.input} keyboardType='numeric'
                        value={idade}
                        onChangeText={setIdade}
                        placeholder="Digite sua idade"
                    />
                </View>
                <View style={styles.linhaForm}>
                    <Text style={styles.textInput}>Email :</Text>
                    <TextInput style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Digite seu email"
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleScreenSobre}>
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
        backgroundColor: '#fff'
    },
    areaForm: {
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    input: {
        height: 60,
        width: 350,
        borderWidth: 1,
        borderColor: '#808080',
        paddingHorizontal: 14,

        borderRadius: 20

    },
    linhaForm: {
        marginVertical: 20
    },
    textInput: {
        marginHorizontal: 5,
        fontSize: 16,
        color: '#2a2a39'
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

