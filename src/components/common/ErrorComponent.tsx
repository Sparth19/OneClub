import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import {size} from '../../themes/Metrics';

interface ErrorProps {
  onPress: () => void;
  msg: string;
  btnText: string;
}

const ErrorComponent: FC<ErrorProps> = ({onPress, msg, btnText}) => {
  return (
    <View style={styles.centerView}>
      <Text style={styles.headerText}>{msg}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.errorText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorComponent;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: FONTS.Inter500,
    color: Colors.darkBase1,
    fontSize: FONT_SIZE.medium,
  },
  errorText: {
    fontFamily: FONTS.Inter700,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.white,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: size(10),
    backgroundColor: Colors.darkBase1,
    margin: size(10),
    borderRadius: size(5),
  },
});
