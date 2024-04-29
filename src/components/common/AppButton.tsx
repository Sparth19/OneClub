import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import {size} from '../../themes/Metrics';

interface AppButtonProps {
  text: string;
  onPress: () => void;
  disabled: boolean;
  isLoading: boolean;
}

const AppButton: FC<AppButtonProps> = ({
  text,
  onPress,
  disabled,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled || isLoading}
      style={styles.container}>
      <View style={styles.btnContainer}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={Colors.white} />
        ) : (
          <Text style={styles.buttonText}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: size(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: size(8),
    backgroundColor: Colors.darkBase1,
    height: size(40),
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: FONT_SIZE.medium,
    fontFamily: FONTS.Inter700,
  },
});

export default AppButton;
