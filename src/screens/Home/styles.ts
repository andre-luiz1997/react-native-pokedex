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
    gradient: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    image: {
        width: 100,
        height: 100,
        color: "#50413D",
        zIndex: 100
    },
    text: {
        fontFamily: theme.fonts.heading700,
        fontSize: 30,
        textAlign: 'left',
    },
    searchbar: {
        backgroundColor: theme.colors.grey1,
        height: 30,
        width: '100%',
        borderRadius: 30,
        marginTop: 30,
        padding: 5,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'        
    },
    flex: {
        width: '100%',
        margin: 0,
        paddingHorizontal: 10
    }
});