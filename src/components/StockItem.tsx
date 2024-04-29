import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {MarketStock} from '../helper/interface';
import {size} from '../themes/Metrics';
import {Colors, FONTS, FONT_SIZE} from '../themes/AppTheme';
import SvgIcon from './SvgIcon';
import {currencyFormat} from '../helper/utils';
import AppAvatar from './common/AppAvatar';
import StockAccordian from './common/StockAccordian';

interface StockItemProps {
  item: MarketStock;
  index: number;
  navigation: any;
  onDelete?: (symbol: string) => void;
}

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const StockItem: FC<StockItemProps> = ({item, index, navigation, onDelete}) => {
  const {
    change_percent,
    symbol,
    name,
    price,
    currency,
    type,
    previous_close,
    country_code,
    last_update_utc,
  } = item;
  const GAINER_STOCK = change_percent >= 0;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const navigateToDetails = () =>
    navigation.navigate('StockDetailsScreen', {item});

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <TouchableOpacity
        key={index.toString()}
        activeOpacity={0.5}
        onPress={navigateToDetails}
        onLongPress={toggleAccordion}
        style={styles.mainView}>
        <View style={styles.firstRow}>
          <View style={styles.centerRow}>
            <View style={{marginHorizontal: size(20)}}>
              <AppAvatar symbol={symbol} />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.titleText} numberOfLines={1}>
                {symbol || ''}
              </Text>
              <Text style={styles.fullnameText} numberOfLines={1}>
                {name}
              </Text>
              <View style={styles.flexend}>
                <Text style={styles.titleText}>
                  {currencyFormat(price, currency)}
                </Text>
                <View style={styles.lastRow}>
                  <SvgIcon
                    name={GAINER_STOCK ? 'gainer' : 'looser'}
                    w={10}
                    h={10}
                  />
                  <Text
                    style={{
                      ...styles.changeText,
                      color: GAINER_STOCK ? Colors.success : Colors.errorText,
                    }}>
                    {change_percent.toFixed(2)}%
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {onDelete ? (
            <TouchableOpacity onPress={() => onDelete(symbol)}>
              <SvgIcon name={'delete'} />
            </TouchableOpacity>
          ) : null}
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <StockAccordian
          previous_close={previous_close}
          currency={currency}
          type={type}
          country_code={country_code}
          last_update_utc={last_update_utc}
        />
      )}
    </>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  mainView: {
    paddingVertical: size(15),
    borderBottomWidth: size(1),
    borderColor: Colors.darkBase3,
    alignItems: 'center',
    marginRight: size(20),
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: size(15),
  },
  titleText: {
    fontFamily: FONTS.Inter600,
    fontSize: FONT_SIZE.medium_extra,
    color: Colors.darkBase1,
  },
  changeText: {
    fontFamily: FONTS.Inter600,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.darkBase1,
    marginLeft: size(5),
  },
  flexend: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  fullnameText: {
    fontFamily: FONTS.Inter500,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.darkBase5,
    marginVertical: size(5),
  },
  lastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: size(10),
  },
  centerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
