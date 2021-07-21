import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from "../global/styles/theme";

import { Home } from '../screens/Home';
import { Pokedex } from "../screens/Pokedex";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    
                }
            }}
        >
            <Screen 
                name="Pokedex"
                component={Pokedex}
            />
            <Screen 
                name="Home"
                component={Home}
            />
            

        </Navigator>
    );
}