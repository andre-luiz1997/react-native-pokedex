import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';

import { useFonts } from "expo-font";
import { Poppins_100Thin, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [ fontsLoaded ] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <Routes/>
  );
}
