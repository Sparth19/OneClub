import React, {FC, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './LoginScreenStyles';
import SvgIcon from '../../components/SvgIcon';
import Metrics from '../../themes/Metrics';
import {Formik} from 'formik';
import AppButton from '../../components/common/AppButton';
import {loginValidationSchema} from '../../helper/validator';
import LoginInput from '../../components/LoginInput';

interface LoginScreenProps {}
interface LoginFormValues {
  email: string;
  password: string;
}

interface InputFocusState {
  email: boolean;
  password: boolean;
}

const LoginScreen: FC<LoginScreenProps> = props => {
  const initialLoginForm: LoginFormValues = {email: '', password: ''};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [inputFocus, setInputFocus] = useState<InputFocusState>({
    email: false,
    password: false,
  });

  const submitLogin = async (values: any) => {
    Keyboard.dismiss();
    setIsLoading(true);
    alert('submit');
    setIsLoading(false);
  };

  const renderLoginInputs = () => {
    return (
      <View style={styles.loginContainer}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialLoginForm}
          onSubmit={values => submitLogin(values)}>
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <View style={{marginTop: Metrics.rfv(30)}}>
              <LoginInput
                name="email"
                placeholder="Email address"
                onChangeText={handleChange('email')}
                value={values?.email}
                onFocus={() => setInputFocus({email: true, password: false})}
                onBlur={handleBlur('email')}
                isFocused={inputFocus.email}
                keyboardType="email-address"
                errors={errors.email}
                touched={touched.email}
              />
              <View style={styles.mTop10}>
                <LoginInput
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values?.password}
                  iconName="cLPassword"
                  onFocus={() => setInputFocus({password: true, email: false})}
                  onBlur={handleBlur('password')}
                  isFocused={inputFocus.password}
                  secureTextEntry={hidePass}
                  onHidePress={() => setHidePass(!hidePass)}
                  hidePass={hidePass}
                  rightIcon={true}
                  errors={errors.password}
                  touched={touched.password}
                />
              </View>
              <AppButton
                text={'Sign in'}
                onPress={handleSubmit}
                disabled={!isValid}
                isLoading={isLoading}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
      enabled>
      <ScrollView
        overScrollMode={'never'}
        style={styles.flex1}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.mainContainer}>
        <View style={styles.alignCenter}>
          <SvgIcon
            name={'loginThumb'}
            w={Metrics.rfv(250)}
            h={Metrics.rfv(250)}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Sign in to The 1% Club!</Text>
            <Text style={styles.labelText}>
              {'Please enter your registered email and password.'}
            </Text>
          </View>
          {renderLoginInputs()}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
