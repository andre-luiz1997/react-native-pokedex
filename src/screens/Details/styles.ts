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
    navigator: {
        marginTop: 50,
        marginHorizontal: 24
    },
    tab: {
        marginHorizontal: 24,
    },
    tabLabel: {
        textTransform: 'capitalize',
        fontFamily: theme.fonts.heading400
    },
    tabIndicator: {
        backgroundColor: theme.colors.black1
    },
    tabSceneContainer: {
        backgroundColor: theme.colors.white1
    },
    genderLabel: {
        fontFamily: theme.fonts.heading400,
        color: theme.colors.black1,
        marginLeft:5
    },
    row: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start'
    },
    col: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    screenHeader: {
        color: theme.colors.black1,
        fontFamily: theme.fonts.heading700,
        marginTop: 15,
        marginBottom: 5
    }
});