import React, {FC, useRef, useState} from 'react';
import {
  View,
  PanResponder,
  Animated,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import Metrics, {size} from '../themes/Metrics';
import {Colors, FONTS, FONT_SIZE} from '../themes/AppTheme';
import SvgIcon from './SvgIcon';

interface SwipableImageProps {
  setOrderConfirm: (val: boolean) => void;
  orderConfirm: boolean;
}

const SwipeableImage: FC<SwipableImageProps> = ({
  orderConfirm,
  setOrderConfirm,
}) => {
  const screenWidth = Metrics.width / 2 + size(55);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        if (gesture.dx < 0) {
          // Do not allow moving left
          return;
        }
        Animated.event([null, {dx: pan.x}], {useNativeDriver: false})(
          e,
          gesture,
        );
      },
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx > screenWidth / 2) {
          // Swipe from left to right
          Animated.timing(pan, {
            toValue: {x: screenWidth, y: 0},
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            setOrderConfirm(true);
          });
        }
      },
    }),
  ).current;

  return (
    <View
      style={{
        ...styles.mainView,
        backgroundColor: orderConfirm ? Colors.success : Colors.goldTheme2,
      }}>
      <View style={{position: 'absolute', alignSelf: 'center'}}>
        <Text style={styles.innerText}>
          {orderConfirm ? 'Confirmed!' : 'Swipe to buy'}
        </Text>
      </View>
      <Animated.View
        style={{
          ...styles.centerCircle,
          transform: [{translateX: pan.x}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.centerView}>
          <SvgIcon name={orderConfirm ? 'true' : 'right'} h={12} w={12} />
        </View>
      </Animated.View>
    </View>
  );
};

export default SwipeableImage;

const styles = StyleSheet.create({
  mainView: {
    height: size(50),
    backgroundColor: Colors.goldTheme2,
    marginHorizontal: size(40),
    marginBottom: Metrics.isIphoneNotch ? 0 : size(20),
    borderRadius: size(51),
    justifyContent: 'center',
  },
  centerCircle: {
    height: size(44),
    width: size(44),
    backgroundColor: Colors.white,
    marginHorizontal: size(5),
    borderRadius: size(45),
  },
  innerText: {
    fontFamily: FONTS.Inter600,
    fontSize: FONT_SIZE.medium,
    color: Colors.darkBase1,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
