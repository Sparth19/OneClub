import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, FONTS, FONT_SIZE} from '../themes/AppTheme';
import {useDebouncedCallback} from 'use-debounce';
import Metrics, {size} from '../themes/Metrics';
import SvgIcon from './SvgIcon';
import {AppDispatch, RootState} from '../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchQuery} from '../store/reducers/searchSlice';
import {fetchSearchResults} from '../store/actions/searchActions';

const SearchBar = () => {
  const dispatch: AppDispatch = useDispatch();

  const [query, setQuery] = useState<string>('');
  const {loading} = useSelector((state: RootState) => state.search);

  const handleSearch = (value: string) => {
    setQuery(value);
    dispatch(setSearchQuery(value));
    if (value !== '') {
      value?.length > 2 && searchDebounce(value);
    }
  };

  const searchDebounce = useDebouncedCallback(async (value: string) => {
    dispatch(fetchSearchResults(value));
  }, 500);

  return (
    <View style={styles.searchView}>
      <SvgIcon name={'search'} style={{marginLeft: size(5)}} />
      <TextInput
        value={query}
        autoCorrect={false}
        placeholder="Search"
        autoCapitalize={'none'}
        autoFocus={false}
        style={styles.searchInput}
        onChangeText={handleSearch}
        placeholderTextColor={Colors.darkBase5}
      />
      {loading ? (
        <ActivityIndicator color={Colors.darkBase1} size={'small'} />
      ) : null}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchView: {
    marginTop: Metrics.isIphoneNotch ? size(30) : size(10),
    height: size(40),
    flexDirection: 'row',
    backgroundColor: Colors.darkBase3,
    marginHorizontal: size(15),
    borderRadius: size(5),
    justifyContent: 'space-between',
    paddingHorizontal: size(10),
    alignItems: 'center',
    paddingVertical: 0,
  },
  searchInput: {
    color: Colors.darkBase1,
    fontFamily: FONTS.Inter500,
    fontSize: FONT_SIZE.small_medium,
    paddingVertical: 0,
    paddingHorizontal: 0,
    flex: 1,
    marginHorizontal: size(10),
  },
});
