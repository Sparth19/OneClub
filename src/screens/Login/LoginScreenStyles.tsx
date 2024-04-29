import {StyleSheet} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import Metrics from '../../themes/Metrics';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  flex1: {
    flex: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: Metrics.rfv(20),
  },
  loginContainer: {
    width: '100%',
  },
  mTop10: {
    marginTop: Metrics.rfv(10),
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: FONTS.Inter700,
    fontSize: FONT_SIZE.regular,
    color: Colors.darkBase1,
    marginBottom: Metrics.rfv(10),
  },
  labelText: {
    fontFamily: FONTS.Inter400,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.darkBase2,
    textAlign: 'center',
  },
  loginBtn: {
    marginTop: Metrics.rfv(60),
  },
});
