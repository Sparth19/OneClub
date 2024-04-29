import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {currencyFormat} from '../../helper/utils';
import moment from 'moment';
import {size} from '../../themes/Metrics';
import {Colors, FONTS, FONT_SIZE} from '../../themes/AppTheme';
interface Props {
  previous_close: number;
  currency: string;
  type: string;
  country_code: string;
  last_update_utc: string;
}

const StockAccordian: FC<Props> = ({
  previous_close,
  currency,
  type,
  country_code,
  last_update_utc,
}) => {
  return (
    <View style={styles.content}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.5}}>
          <Text style={styles.fullnameText}>Previous close</Text>
          <Text style={styles.titleText}>
            {currencyFormat(previous_close, currency)}
          </Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.fullnameText}>Type</Text>
          <Text style={styles.titleText}>{type}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.5, marginTop: size(5)}}>
          <Text style={styles.fullnameText}>Country code</Text>
          <Text style={styles.titleText}>{country_code}</Text>
        </View>
        <View style={{flex: 0.5, marginTop: size(5)}}>
          <Text style={styles.fullnameText}>Last update UTC</Text>
          <Text style={styles.titleText}>
            {moment(last_update_utc).format('DD/MM/YY hh:mm')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StockAccordian;

const styles = StyleSheet.create({
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
  fullnameText: {
    fontFamily: FONTS.Inter500,
    fontSize: FONT_SIZE.small_medium,
    color: Colors.darkBase5,
    marginVertical: size(5),
  },
  content: {
    backgroundColor: Colors.darkBase3,
    padding: size(15),
  },
});
