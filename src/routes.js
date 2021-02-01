import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from './screens/Home';
import Cadastro from './screens/Cadastro';
import IMCScreen from './screens/IMC';
import Sobre from './screens/Sobre';

import Header from './components/Header';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name='Home' component={Home}
                    options={{ headerShown: false }} />

                <Screen name='Cadastro' component={Cadastro}
                    options={{
                        headerShown: true,
                        header: () => <Header logo={true} title="Cadastro" />
                    }}
                />

                <Screen name='IMC' component={IMCScreen}
                options={{
                    headerShown: true,
                    header: () => <Header logo={true} title="IMC" />
                }} />

                <Screen name='Sobre' component={Sobre}
                options={{
                    headerShown: true,
                    header: () => <Header logo={true} title="Sobre" />
                }} />

            </Navigator>
        </NavigationContainer>
    );
}