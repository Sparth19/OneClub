import {StyleSheet} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import {size} from '../../themes/Metrics';

export default StyleSheet.create({
  indicator: {
    opacity: 1,
    backgroundColor: Colors.darkBase4,
    width: size(50),
    height: size(7),
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayView: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoutView: {
    alignSelf: 'flex-end',
    marginRight: size(20),
    marginLeft: size(10),
  },
  logoutText: {
    fontFamily: FONTS.Inter500,
    color: Colors.darkBase1,
    fontSize: FONT_SIZE.small_medium,
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
