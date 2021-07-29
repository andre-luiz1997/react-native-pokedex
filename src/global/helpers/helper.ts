export function convertDmToCm(dm: number){
    //DECIMETER TO CENTIMETER
    return (dm * 10).toFixed(2);
}

export function convertHgToKg(hg: number){
    //HECTOGRAM TO KILOGRAM
    return (hg * 0.1).toFixed(2);
}

export function capitalize(str: string){
    str = str.replaceAll('-',' ');
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() +  lower.slice(1);
}

export function calcMalePercentage(femalePercentage: number){
    if(femalePercentage == -1) return -1;
    return 100 - femalePercentage;
}