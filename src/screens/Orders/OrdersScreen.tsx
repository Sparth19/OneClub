import React, {FC, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
import {size} from '../../themes/Metrics';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import StockItem from '../../components/StockItem';
import {deleteOrder, placeOrder} from '../../store/reducers/ordersSlice';
import ErrorComponent from '../../components/common/ErrorComponent';
import SwipeableImage from '../../components/SwipableImage';
import notifee from '@notifee/react-native';

const OrdersScreen: FC = ({navigation}: any) => {
  const dispatch: AppDispatch = useDispatch();
  const ordersList = useSelector((state: RootState) => state.orders.orders);
  const [orderConfirm, setOrderConfirm] = useState<boolean>(false);

  const handleRemoveStock = (stockSym: string) => {
    dispatch(deleteOrder(stockSym));
  };

  const onDisplayNotification = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    ordersList.map(async item => {
      await notifee.displayNotification({
        title: 'Order completed',
        body: `Your Purchase order for ${item.symbol} is completed`,
        android: {
          channelId,
          pressAction: {
            id: 'default',
          },
        },
      });
    });

    dispatch(placeOrder());
  };

  const navigateToHome = () => navigation.navigate('HomeScreen');

  const handleOrderConfirm = (value: boolean) => {
    setOrderConfirm(value);
    onDisplayNotification();
  };

  if (!ordersList?.length) {
    return (
      <ErrorComponent
        msg={'No open orders'}
        onPress={navigateToHome}
        btnText="Back to home"
      />
    );
  }
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        backgroundColor={Colors.white}
        translucent={false}
        barStyle={'dark-content'}
      />
      <View style={{flex: 1}}>
        {ordersList?.length ? (
          <Text style={styles.titleText}>Open Orders</Text>
        ) : null}
        <FlatList
          data={ordersList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <StockItem
              item={item}
              index={index}
              navigation={navigation}
              onDelete={v => handleRemoveStock(v)}
            />
          )}
        />
      </View>
      {/* swipe to buy */}
      <SwipeableImage
        orderConfirm={orderConfirm}
        setOrderConfirm={v => handleOrderConfirm(v)}
      />
    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: FONTS.Inter600,
    fontSize: FONT_SIZE.regular,
    color: Colors.darkBase1,
    marginHorizontal: size(20),
    marginTop: size(20),
  },
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
});
