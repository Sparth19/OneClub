import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Colors, FONTS, FONT_SIZE} from './src/themes/AppTheme';

const App: FC = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: FONTS.Inter700,
          color: Colors.mainTheme1,
          fontSize: FONT_SIZE.large,
        }}>
        Welcome!
      </Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
