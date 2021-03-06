import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colours } from '../../../config/styles';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colours.pureWhite,
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  trackingContainer: {
    marginLeft: width * 0.02,
    ...Platform.select({
      ios: {
        marginTop: height * 0.005,
      },
      android: {
        marginTop: height * 0.015,
      },
    }),
    backgroundColor: 'transparent',
    width: width * 0.3,
    height: height * 0.065,
  },
  tonightContainer: {
    marginLeft: width * 0.36,
    ...Platform.select({
      ios: {
        marginTop: height * 0.005,
      },
      android: {
        marginTop: height * 0.015,
      },
    }),
    width: width * 0.3,
    height: height * 0.065,
    backgroundColor: 'transparent',
  },
});
