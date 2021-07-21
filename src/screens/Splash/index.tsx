import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from "./styles";
import { theme } from '../../global/styles/theme';

import PokeballImg from "../../assets/img/pokeball.png";

export function Splash(){
    const { green1, green2, blue1, blue2 } = theme.colors;

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[green1, green2, blue1, blue2]}
                style={styles.gradient}
                start={[0,0]}
                end={[1,1]}
                locations={[0,0.3,0.7,1]}
            >
                
            </LinearGradient>
            <Image 
                source={PokeballImg}
                style={styles.image}
            />
        </View>
    );
}
