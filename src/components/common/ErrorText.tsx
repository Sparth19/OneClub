import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import {size} from '../../themes/Metrics';

interface ErrorTextProps {
  errorMsg: string;
}

const ErrorText: FC<ErrorTextProps> = ({errorMsg}) => {
  return <Text style={styles.errorText}>{errorMsg}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: FONT_SIZE.small,
    marginTop: size(5),
    color: Colors.errorText,
    fontFamily: FONTS.Inter400,
  },
});
export default ErrorText;
