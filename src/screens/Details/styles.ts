import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    number: {
        color: theme.colors.white1,
        fontSize: 15,
        fontFamily: theme.fonts.heading100,
        textAlign: 'right'
    },
    statusbar: {
        marginTop: getStatusBarHeight() + 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    },
    title: {
        color: theme.colors.white1,
        fontSize: 25,
        fontFamily: theme.fonts.heading400,
        textTransform: 'capitalize',
        textAlign: 'left',
    },
    blankCard: {
        backgroundColor: theme.colors.white1,
        height: '60%',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    pokeballImg: {
        position: 'absolute',
        width: 200,
        height: 200,
        top: '-35%',
        right: '-10%',
        opacity: 0.1
    },
    pokemonImage: {
        position: 'absolute',
        width: 200,
        height: 200,
        top: -150,
        alignSelf: 'flex-end',
        right: 50
    },
    back: {
        width: 20,
        height: 20,
        color: theme.colors.white1
    },
    badgeContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'flex-start'
    },
});