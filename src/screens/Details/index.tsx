import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import { Text, View, Image, StatusBar, Dimensions, FlatList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Loading } from '../../components/Loading';
import { PokemonProps } from '../../components/PokeCard'
import { fetchColors } from '../../services/typeColors';
import { convertDmToCm, convertHgToKg, capitalize, calcMalePercentage } from "../../global/helpers/helper";

import { styles } from './styles';
import PokeballImg from "../../assets/img/pokeball_white.png";
import TypeBadge from '../../components/TypeBadge';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';
import { InfoRow } from '../../components/InfoRow';


type SpeciesProps = {
    gender_rate: number,
    genera: [
        genus: string,
        name: string,
    ]
};

type AbilitiesProps = {
    name: string;
}

type Params = {
    pokemon: PokemonProps
}

export function Details() {
    const route = useRoute();
    const navigator = useNavigation();
    const Tab = createMaterialTopTabNavigator();
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [detailsLoading, setDetailsLoading] = useState(true);
    const { pokemon } = route.params as Params;
    const [species, setSpecies] = useState<SpeciesProps>();
    const [abilities, setAbilities] = useState<AbilitiesProps>();

    async function fetchPokemon(){
        let response = await fetchColors(pokemon.types);
        setTypes(response);
            response = await api.get(`/pokemon-species/${pokemon.id}`);
        setSpecies(response.data);
    }

    useEffect(() => {
        try{
            fetchPokemon();
        }catch (error){
            navigator.navigate("Pokedex");
        }finally{
            setLoading(false);
            setDetailsLoading(false);
        }
    }, [pokemon]);

    function InfoScreen({pokemon}){
        let specie = '';
        if(species !== undefined){
            specie = species.genera.find((item) => {
                return item.language.name == 'en';
            });
        }
        
        return (
            <View style={{
                paddingTop: 30
            }}>
                {
                    species === undefined ? <Loading/> : 
                    <>
                        <InfoRow header="Species" title={specie.genus} />

                        <InfoRow header="Height" title={`${convertDmToCm(pokemon.height)}cm`} />
                        <InfoRow header="Weight" title={`${convertHgToKg(pokemon.weight)}Kg`} />
                        <InfoRow header="Abilities" title={pokemon.abilities.map((ability, index, arr) => {
                            if(index === arr.length - 1){
                                return capitalize(ability.ability.name);
                            }else{
                                return capitalize(ability.ability.name) + ', ';
                            }
                        })} />
                        <Text style={styles.screenHeader}>Breeding</Text>
                        <InfoRow header="Gender" title={
                            <View>
                                {
                                    species.gender_rate == -1 ? 
                                    <View><Text style={styles.genderLabel}>Asexuate</Text></View>
                                    :
                                    <View style={styles.row}>
                                        <View style={styles.col}>
                                            <Ionicons name="female" color={theme.colors.pink1}/>
                                            <Text style={styles.genderLabel}>{species.gender_rate}%</Text>
                                        </View>
                                        <View style={[
                                            styles.col,
                                            {
                                                marginLeft: 20,
                                            }
                                        ]}>
                                            <Ionicons name="male" color={theme.colors.blue1}/>
                                            <Text style={styles.genderLabel}>{calcMalePercentage(species.gender_rate)}%</Text>
                                        </View>
                                    </View>
                                }
                            </View>
                        }></InfoRow>
                    </>
                }
                
            </View>
        );
    }

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
                    <Text style={styles.title}>{pokemon.name}</Text>
                    <Text style={styles.number}>{`#${pokemon.id}`}</Text>
                </View>
                <View style={styles.badgeContainer}>
                    { 
                        pokemon.types.map((type, index) => {
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
                        source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}}
                        style={styles.pokemonImage}
                        resizeMode="contain"
                    />

                    {
                        detailsLoading ? <Loading /> : 
                        <Tab.Navigator
                            style={styles.navigator}
                            tabBarPosition="top"
                            initialLayout={{ 
                                width: Dimensions.get('window').width
                            }}
                            tabBarOptions={{
                                tabStyle: styles.tab,
                                labelStyle: styles.tabLabel,
                                indicatorStyle: styles.tabIndicator
                            }}
                            sceneContainerStyle={styles.tabSceneContainer}
                        >
                            <Tab.Screen name="Info" children={()=><InfoScreen pokemon={pokemon}/>} ></Tab.Screen>
                            <Tab.Screen name="Stats" component={StatsScreen}></Tab.Screen>
                            <Tab.Screen name="Evolution" component={EvolutionScreen}></Tab.Screen>
                            <Tab.Screen name="Moves" component={MovesScreen}></Tab.Screen>
                        </Tab.Navigator>
                    }
                        
                </View>
            </View>
            
        } 
      </View> 
    );
}




function StatsScreen(){
    return (
        <View>
            <Text>Stats Screen</Text>
        </View>
    );
}

function EvolutionScreen(){
    return (
        <View>
            <Text>Evolution Screen</Text>
        </View>
    );
}

function MovesScreen(){
    return (
        <View>
            <Text>Moves Screen</Text>
        </View>
    );
}