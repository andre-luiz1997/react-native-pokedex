import React from 'react';
import { Text, Image, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { FontAwesome } from '@expo/vector-icons';

export function Home(){
    const navigator = useNavigation();

    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.text}>Which Pokemon{"\n"}are you looking for?</Text>

                <TouchableOpacity
                    onPress={ () => {
                        navigator.navigate('Pokedex')
                    }}
                    style={styles.flex}
                >
                    <View style={styles.searchbar} >
                        <FontAwesome name="search" size={20} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </Background>
    );
}
