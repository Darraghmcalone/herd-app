import { StyleSheet } from 'react-native';
import { colours } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.pureWhite,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: '20%',
  },
  profileContainer: {
    width: '90%',
    height: '48%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profileText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    height: '40%',
    width: '40%',
  },
});
