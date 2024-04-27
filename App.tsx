import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Colors, FONTS, FONT_SIZE} from './src/themes/AppTheme';
import SvgIcon from './src/components/SvgIcon';
import Metrics from './src/themes/Metrics';

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
      <SvgIcon name={'loginThumb'} h={150} w={Metrics.width} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
