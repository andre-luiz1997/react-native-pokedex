
import { typeColors } from "../global/styles/theme";

export async function fetchColors(types: any[]){
    let colors = [];
    types.map((type) => { 
        const name = type.type.name;
        if(!colors.includes(name)) colors.push(typeColors[name]);
    });
    return colors;
}