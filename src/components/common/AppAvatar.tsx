import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {getRandomColor, removeNumbersAndSymbols} from '../../helper/utils';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import {size} from '../../themes/Metrics';

const AppAvatar: FC<{symbol: string; large?: boolean; style?: any}> = ({
  symbol,
  large,
  style,
}) => {
  return (
    <View
      style={{
        ...styles.mainView,
        height: large ? size(100) : size(45),
        width: large ? size(100) : size(45),
        backgroundColor: getRandomColor(),
        ...style,
      }}>
      <Text
        style={{
          ...styles.text,
          fontSize: large ? FONT_SIZE.large : FONT_SIZE.small_medium,
        }}>
        {removeNumbersAndSymbols(symbol)}
      </Text>
    </View>
  );
};

export default AppAvatar;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.Inter600,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.darkBase1,
  },
  mainView: {
    flexDirection: 'row',
    height: size(45),
    width: size(45),
    borderRadius: size(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
