import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Resultado from '../components/Resultado';

export default function IMC() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const [calcular, setCalcular] = useState(false);

    const [disabledButton, setDisabledButton] = useState(false);
    const [disabledTextInput, setDisabledTextInput] = useState(true);

    function calcularIMC() {
        setCalcular(true);
        setDisabledButton(true);
        setDisabledTextInput(false);
    }

    function calcularIMCAgain() {
        setCalcular(false);
        setDisabledButton(false);
        setDisabledTextInput(true);
        setPeso('');
        setAltura('');

    }

    return (
        <View style={styles.container}>
            <View style={styles.areaForm}>
                <View style={styles.linhaForm}>
                    <Text style={styles.textInput}>Peso :</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite seu peso"
                        value={peso}
                        onChangeText={setPeso}
                        editable={disabledTextInput} />
                </View>
                <View style={styles.linhaForm}>
                    <Text style={styles.textInput}>Altura :</Text>
                    <TextInput style={styles.input}
                        placeholder="Digite sua altura"
                        value={altura}
                        onChangeText={setAltura}
                        editable={disabledTextInput} />
                </View>

                {!disabledButton ?
                    <View>
                        <TouchableOpacity style={styles.button} onPress={calcularIMC} disabled={disabledButton} >
                            <Text style={styles.textButton}>Calcular!</Text>
                        </TouchableOpacity>
                    </View> :
                    <View>
                        <TouchableOpacity style={styles.buttonDisabled} onPress={calcularIMCAgain}>
                            <Text style={styles.textButton}>Calcular novamente!</Text>
                        </TouchableOpacity>
                    </View>

                }

            </View>

            {calcular ?
                <Resultado valuePeso={peso} valueAltura={altura} /> :
                <View />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textIMC: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    areaForm: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    linhaForm: {
        marginVertical: 7
    },
    textInput: {
        marginHorizontal: 5,
        fontSize: 16,
        color: '#2a2a39'
    },
    input: {
        height: 60,
        width: 350,
        borderWidth: 1,
        borderColor: '#808080',
        paddingHorizontal: 14,

        borderRadius: 20

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
    },
    buttonDisabled: {
        marginTop: 30,
        backgroundColor: '#808080',
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 80,

        borderRadius: 20,
    },

    textResultado: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
});