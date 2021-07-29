import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5
  },
  header: {
    fontFamily: theme.fonts.heading400,
    color: theme.colors.grey1,
    width: '30%'
  },
  title: {
    fontFamily: theme.fonts.heading400,
    color: theme.colors.black1,
    width: '70%'
  }
});