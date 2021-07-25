import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
        borderRadius: 30,
        backgroundColor: theme.colors.grey1,
        marginBottom: 10,
    },
    number: {
        color: theme.colors.white1,
        fontSize: 15,
        fontFamily: theme.fonts.heading100,
        textAlign: 'left'
    },
    title: {
        color: theme.colors.white1,
        fontSize: 25,
        fontFamily: theme.fonts.heading400,
        textTransform: 'capitalize',
        textAlign: 'left'
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'flex-end',
    },
    bgDecoration: {
        position: 'absolute',
        width: 200,
        height: 200,
        bottom: 0,
        right: 0,
        opacity: 0.1
    },
    imgContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    badgeContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50
    },
    badge: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        marginTop: 50,
        borderRadius: 20,
        minWidth: 50,
        textAlign: 'center',
        backgroundColor: theme.colors.grey2,
        opacity: 0.8,
        fontFamily: theme.fonts.heading400,
        fontSize: 12,
        color: theme.colors.white1,
        textTransform: 'capitalize'
    }
});