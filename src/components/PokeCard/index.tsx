import React, { Component, useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from "./styles";
import { theme } from '../../global/styles/theme';
import { fetchColors } from '../../services/typeColors';
import PokeballImg from "../../assets/img/pokeball_white.png";

import TypeBadge from '../../components/TypeBadge';
import { api } from '../../services/api';
import { Loading } from '../Loading';

export type PokemonProps = {
    id: number;
    name: string;
    sprites: string[];
    types: string[];
}

type Props = {
    data: PokemonProps
}

export function PokeCard({data}: Props){
    const [pokemon, setPokemon] = useState<PokemonProps>();
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigator = useNavigation();

    async function fetchPokemon(){
        const response = await api.get(`/pokemon/${data.name}`);
        setPokemon(response.data);
        setLoading(false);
    }
    
    useEffect(() => {
        fetchPokemon();
    }, []);

    useEffect(() => {
        if( pokemon !== undefined ){
            fetchTypes();
        } 
    }, [pokemon]);

    async function fetchTypes(){
        const response = await fetchColors(pokemon.types);
        setTypes(response);
    }

    async function handlePokemonDetails(pokemon: PokemonProps){
        const data = {
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites,
            types: pokemon.types
        }

        navigator.navigate('Details', {data});
    }

    return (
        <>
            {
                loading ? <Loading /> :
                <TouchableOpacity 
                    onPress={() =>  handlePokemonDetails(pokemon)}
                    style={[
                        styles.card,
                        {
                            backgroundColor: types[0]
                        }
                    ]}>
                    <Image 
                        source={PokeballImg}
                        style={styles.bgDecoration}
                    />
                    <View style={styles.imgContainer}>
                        <View>
                            <Text style={styles.number}>{`#${pokemon.id}`}</Text>
                            <Text style={styles.title}>{pokemon.name}</Text>
                            <View style={styles.badgeContainer}>
                                { 
                                    pokemon.types.map((type, index) => {
                                        return (
                                            <TypeBadge key={index} title={type.type.name} />
                                        );
                                    }) 
                                }
                            </View>
                        </View>
                        <Image
                            source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                </TouchableOpacity>
            }
        </>
    );
}
