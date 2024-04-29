import React, {FC} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Colors} from '../../themes/AppTheme';
import SvgIcon from '../../components/SvgIcon';

const SplashScreen: FC = () => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={Colors.black} barStyle={'light-content'} />
      <SvgIcon name={'logo'} w={150} h={150} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
});
