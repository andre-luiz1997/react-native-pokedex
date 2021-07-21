import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: 80
    },
    cards: {
        width: '100%',
        marginTop: 50
    },
    text: {
        fontFamily: theme.fonts.heading700,
        fontSize: 30,
        textAlign: 'left',
        width: '100%'
    },
    scroll: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    }
});