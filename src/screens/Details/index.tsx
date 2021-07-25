import { useNavigation, useRoute } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Loading } from '../../components/Loading';
import { PokemonProps } from '../../components/PokeCard'
import { fetchColors } from '../../services/typeColors';

import { styles } from './styles';
import PokeballImg from "../../assets/img/pokeball_white.png";
import TypeBadge from '../../components/TypeBadge';

type Params = {
    data: PokemonProps
}

export function Details() {
    const route = useRoute();
    const navigator = useNavigation();
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data } = route.params as Params;
    console.log(data.sprites);

    async function fetchTypes(){
        const response = await fetchColors(data.types);
        setTypes(response);
    }

    useEffect(() => {
        try{
            fetchTypes();
        }catch (error){
            navigator.navigate("Pokedex");
        }finally{
            setLoading(false);
        }
    }, [data])

    return (
      <View style={styles.container}>
        {
            loading? <Loading /> :
            <View  style={[
                styles.container,
                {
                    backgroundColor: types[0]
                }
            ]}>
                <View style={styles.statusbar}>
                    <Feather name="arrow-left" style={styles.back} size={24} onPress={() => { navigator.goBack(); }} />
                    <Feather name="heart" style={styles.back} size={24} />
                </View>
                <View style={[styles.innerContainer,{marginVertical: 20}]}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.number}>{`#${data.id}`}</Text>
                </View>
                <View style={styles.badgeContainer}>
                    { 
                        data.types.map((type, index) => {
                            return (
                                <TypeBadge key={index} title={type.type.name} />
                            );
                        }) 
                    }
                </View>
                <View style={styles.blankCard}>
                    <Image
                        source={PokeballImg}
                        style={styles.pokeballImg}
                    />
                    <Image
                        source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}}
                        style={styles.pokemonImage}
                        resizeMode="contain"
                    />
                </View>
            </View>
            
        } 
      </View> 
    );
}
