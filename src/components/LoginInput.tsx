import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import SvgIcon from './SvgIcon';
import ErrorText from './common/ErrorText';
import {Colors, FONTS, FONT_SIZE} from '../themes/AppTheme';
import {size} from '../themes/Metrics';

interface LoginInputProps {
  onChangeText: (text: string) => void;
  onBlur: () => void;
  onFocus: () => void;
  value: string;
  rightIcon?: boolean;
  keyboardType?: KeyboardTyp;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onHidePress?: () => void;
  hidePass?: boolean;
  errors?: string;
  touched?: boolean;
  isFocused?: boolean;
}

const LoginInput: FC<LoginInputProps> = props => {
  const {
    onChangeText,
    onBlur,
    value,
    rightIcon,
    keyboardType,
    name,
    placeholder,
    secureTextEntry,
    onHidePress,
    hidePass,
    onFocus,
    errors,
    touched,
    isFocused,
  } = props;

  return (
    <View style={{marginBottom: rightIcon ? 0 : size(10)}}>
      <View
        style={{
          ...styles.inputContainer,
          borderColor: isFocused ? Colors.app2196F3 : Colors.darkBase5,
        }}>
        <View style={styles.container}>
          <TextInput
            name={name}
            placeholder={placeholder}
            placeholderTextColor={Colors.darkBase5}
            onChangeText={onChangeText}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={keyboardType ? keyboardType : 'default'}
            secureTextEntry={secureTextEntry}
            style={styles.textInputStyle}
          />
          {rightIcon ? (
            <TouchableOpacity
              onPress={onHidePress}
              style={styles.rightIconView}>
              {!hidePass ? (
                <SvgIcon
                  name={'eyeShow'}
                  style={styles.eyeIcon}
                  w={23}
                  h={23}
                />
              ) : (
                <SvgIcon
                  name={'eyeHide'}
                  style={styles.eyeIcon}
                  w={23}
                  h={23}
                />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {errors && touched && <ErrorText errorMsg={errors} />}
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: size(8),
    borderColor: Colors.darkBase5,
    backgroundColor: Colors.darkBase2,
    borderWidth: size(1),
    height: size(40),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  rightIconView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: size(10),
  },
  textInputStyle: {
    flex: 1,
    marginHorizontal: size(14),
    fontFamily: FONTS.Inter400,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.darkBase1,
  },
  eyeIcon: {
    marginLeft: !Platform.isPad ? 0 : size(10),
  },
});
