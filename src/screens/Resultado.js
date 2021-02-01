import React from 'react';
import { View } from 'react-native';

import IMCCalc from '../components/IMCCalc';

export default function Resultado({ valuePeso, valueAltura }) {

    return (
        <View>
           <IMCCalc valuePeso={peso} valueAltura={altura} />
        </View>
    );
};
