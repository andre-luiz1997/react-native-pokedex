import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
    }

});