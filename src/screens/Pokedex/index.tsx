import React, { useEffect, useState } from 'react';
import { Text, Image, View, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from "./styles";
import { theme } from '../../global/styles/theme';

import PokeballImg from "../../assets/img/pokeball.png";
import { Background } from '../../components/Background';
import { FontAwesome } from '@expo/vector-icons';
import { PokeCard } from '../../components/PokeCard';
import { Loading } from '../../components/Loading';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export function Pokedex(){
    const [pokemons,setPokemons] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemons();
    }, []);
    
    const fetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
            .then(response => response.json() )
            .then(pokemons => setPokemons(pokemons.results.sort(function(a,b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })))
            .then(() => {
                setLoading(false);
            });

        
    }

    return (
        <>
            <Background>
            
            </Background>
            <View style={styles.container}>
                <Text style={styles.text}>Pokedex</Text>
                {
                    loading ? <Loading /> : 
                    <FlatList
                        contentContainerStyle={{flexGrow: 1}}
                        style={styles.cards}
                        data={pokemons}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => (
                            <PokeCard data={item} />
                        )}
                        
                    >
                    </FlatList>
                    
                }
            </View>
        </>
    );
}
