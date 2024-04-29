import {StyleSheet} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import Metrics, {size} from '../../themes/Metrics';

export default StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: FONTS.Inter600,
    fontSize: FONT_SIZE.regular,
    color: Colors.darkBase1,
  },
  changeText: {
    fontFamily: FONTS.Inter600,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.darkBase1,
    marginLeft: size(5),
  },
  fullnameText: {
    fontFamily: FONTS.Inter500,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.darkBase5,
    marginVertical: size(5),
  },
  lastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: size(10),
  },
  button: {
    backgroundColor: Colors.goldTheme1,
    paddingVertical: size(15),
    marginHorizontal: size(15),
    marginBottom: Metrics.isIphoneNotch ? 0 : size(15),
  },
  btnText: {
    fontFamily: FONTS.Inter600,
    fontSize: FONT_SIZE.medium,
    color: Colors.darkBase1,
    textAlign: 'center',
  },
  topView: {
    paddingHorizontal: size(15),
    flex: 1,
  },
  avatar: {
    alignSelf: 'center',
    marginVertical: size(20),
  },
});
