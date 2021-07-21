import React, {ReactNode} from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { View,Image } from "react-native";

import PokeballImg from "../../assets/img/pokeball_grey.png";

type Props = {
    children: ReactNode;
}

export function Background({children} : Props){
    const { green1, green2, blue1, blue2 } = theme.colors;

    return (
        <View>
            <Image 
                source={PokeballImg}
                style={styles.img}
            />
            {children}
        </View>
        // <LinearGradient
        //     colors={[green2, blue1]}
        //     style={styles.container}
        //     start={[1,1]}
        //     end={[1,1]}
        //     locations={[0,1]}
        // >
        //     {children}
        // </LinearGradient>
    );
}