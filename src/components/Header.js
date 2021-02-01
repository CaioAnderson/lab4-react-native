import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Constants from 'expo-constants';


export default function Header({ title }) {

    const navigation = useNavigation();

    function handlegoBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={handlegoBack}>
                <View style={styles.button}>
                    <Feather name='chevron-left' size={24} color="#808080" />
                </View>
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingTop: Constants.statusBarHeight + 15,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'

    },
    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: "#808080"
    },

    title: {
        marginLeft: 20,
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    }
})