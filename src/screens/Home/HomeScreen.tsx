import React, {FC, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../themes/AppTheme';
import styles from './HomeScreenStyles';
import StockItem from '../../components/StockItem';
import {fetchMarketTrends} from '../../store/actions/marketActions';
import {AppDispatch, RootState} from '../../store/store';
import ErrorComponent from '../../components/common/ErrorComponent';
import SearchBar from '../../components/SearchBar';
import {logoutSuccess} from '../../store/reducers/authSlice';
import AppPagination from '../../components/AppPagination';
import {MarketStock} from '../../helper/interface';
import {setSearchQuery} from '../../store/reducers/searchSlice';

const HomeScreen: FC<{navigation: any}> = ({navigation}) => {
  const dispatch: AppDispatch = useDispatch();
  const bottomSheetRef = useRef(null);
  const itemsPerPage = 5;

  const [data, setData] = useState<MarketStock[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);

  const {stocksList, loading, error} = useSelector(
    (state: RootState) => state.market,
  );
  const {searchResults, searchQuery} = useSelector(
    (state: RootState) => state.search,
  );
  const {user} = useSelector((state: RootState) => state.auth);

  const fetchData = async () => {
    if (!stocksList.length) await dispatch(fetchMarketTrends());
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log('ree');
    fetchDataForPage(currentPage);
  }, [currentPage, stocksList]);

  const fetchDataForPage = (page: number) => {
    const start = (page - 1) * itemsPerPage;
    const end = Math.min(page * itemsPerPage, stocksList?.length);
    const newData = stocksList && stocksList.slice(start, end);
    setData(newData);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    // fetchDataForPage(page);
  };

  const handleLogout = () => dispatch(logoutSuccess());

  const handleSheet = (value: number) => {
    setShowSearch(!!value);
    if (!value) dispatch(setSearchQuery(''));
  };

  const renderStockList = () => {
    return (
      <BottomSheetFlatList
        data={searchQuery ? searchResults : data || []}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <StockItem item={item} index={index} navigation={navigation} />
        )}
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.flexCenter}>
        <ActivityIndicator size={'large'} color={Colors.darkBase1} />
      </View>
    );
  }

  if (error) {
    return (
      <ErrorComponent
        onPress={fetchData}
        msg={'Something went wrong!'}
        btnText={'Try again'}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={Colors.darkBase3}
        translucent={false}
        barStyle={'dark-content'}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        animateOnMount
        containerStyle={{
          backgroundColor: Colors.darkBase3,
        }}
        handleIndicatorStyle={styles.indicator}
        snapPoints={['60%', '100%']}
        onChange={v => handleSheet(v)}>
        <View style={styles.displayView}>
          {showSearch ? <SearchBar /> : null}
          {renderStockList()}
          {stocksList && stocksList?.length ? (
            <AppPagination
              totalPages={
                searchQuery ? searchResults?.length / 5 : stocksList?.length / 5
              }
              onPageChange={onPageChange}
            />
          ) : null}
        </View>
      </BottomSheet>
      {!showSearch ? (
        <View style={styles.userView}>
          <Text style={{...styles.logoutText, color: Colors.app2196F3}}>
            {user?.email}
          </Text>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutView}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
