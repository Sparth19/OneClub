import React, {FC} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppAvatar from '../../components/common/AppAvatar';
import {Colors} from '../../themes/AppTheme';
import {currencyFormat} from '../../helper/utils';
import SvgIcon from '../../components/SvgIcon';
import {AppDispatch} from '../../store/store';
import {useDispatch} from 'react-redux';
import {addToOrder} from '../../store/reducers/ordersSlice';
import StockAccordian from '../../components/common/StockAccordian';
import {MarketStock} from '../../helper/interface';
import styles from './StockDetailsStyles';

const StockDetailsScreen: FC = ({
  navigation,
  route: {
    params: {item},
  },
}: any) => {
  const dispatch: AppDispatch = useDispatch();
  const {
    change_percent,
    symbol,
    name,
    price,
    currency,
    previous_close,
    type,
    country_code,
    last_update_utc,
  } = item;
  const GAINER_STOCK = change_percent >= 0;

  const handleAddOrder = (item: MarketStock) => {
    dispatch(addToOrder(item));
    navigation.navigate('OrdersScreen');
  };

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        backgroundColor={Colors.white}
        translucent={false}
        barStyle={'dark-content'}
      />
      <View style={styles.topView}>
        <AppAvatar symbol={symbol} large style={styles.avatar} />
        <Text style={styles.titleText}>{symbol || ''}</Text>
        <Text style={styles.fullnameText}>{name}</Text>
        <Text style={styles.titleText}>{currencyFormat(price, currency)}</Text>

        <View style={styles.lastRow}>
          <SvgIcon name={GAINER_STOCK ? 'gainer' : 'looser'} w={10} h={10} />
          <Text
            style={{
              ...styles.changeText,
              color: GAINER_STOCK ? Colors.success : Colors.errorText,
            }}>
            {change_percent.toFixed(2)}%
          </Text>
        </View>

        <View style={{flex: 1}}>
          <StockAccordian
            previous_close={previous_close}
            currency={currency}
            type={type}
            country_code={country_code}
            last_update_utc={last_update_utc}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddOrder(item)}>
        <Text style={styles.btnText}>Add to order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StockDetailsScreen;
