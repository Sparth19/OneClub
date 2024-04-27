import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Colors, FONTS, FONT_SIZE} from './src/themes/AppTheme';
import SvgIcon from './src/components/SvgIcon';
import Metrics from './src/themes/Metrics';
import LoginScreen from './src/screens/Login/LoginScreen';

const App: FC = () => {
  return <LoginScreen />;
};

export default App;

const styles = StyleSheet.create({});
