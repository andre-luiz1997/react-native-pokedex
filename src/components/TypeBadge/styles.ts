import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    badge: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
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