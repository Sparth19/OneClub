import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {size} from '../themes/Metrics';
import {Colors, FONTS, FONT_SIZE} from '../themes/AppTheme';
import SvgIcon from './SvgIcon';

interface AppPaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const AppPagination: FC<AppPaginationProps> = ({totalPages, onPageChange}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPages = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(currentPage + 2, totalPages);

    if (currentPage - 2 <= 1) {
      endPage = Math.min(5, totalPages);
    }
    if (currentPage + 2 >= totalPages) {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <TouchableOpacity
          key={i}
          onPress={() => handlePageChange(i)}
          style={styles.pageButton}>
          <Text
            style={[
              styles.pagenum,
              i === currentPage && styles.currentPageNum,
            ]}>
            {i}
          </Text>
        </TouchableOpacity>,
      );
    }

    if (totalPages > 5 && currentPage - 2 > 1) {
      pages.unshift(
        <TouchableOpacity
          key={1}
          onPress={() => handlePageChange(1)}
          style={styles.pageButton}>
          <Text style={styles.pagenum}>1</Text>
        </TouchableOpacity>,
      );
      pages.unshift(
        <TouchableOpacity
          key="leftEllipsis"
          style={styles.ellipsisButton}
          disabled>
          <Text style={styles.pagenum}>...</Text>
        </TouchableOpacity>,
      );
    }

    if (totalPages > 5 && currentPage + 2 < totalPages) {
      pages.push(
        <TouchableOpacity
          key="rightEllipsis"
          style={styles.ellipsisButton}
          disabled>
          <Text style={styles.pagenum}>...</Text>
        </TouchableOpacity>,
      );
      pages.push(
        <TouchableOpacity
          key={totalPages}
          onPress={() => handlePageChange(totalPages)}
          style={styles.pageButton}>
          <Text style={styles.pagenum}>{totalPages}</Text>
        </TouchableOpacity>,
      );
    }

    return pages;
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      {currentPage > 1 ? (
        <TouchableOpacity
          onPress={handlePreviousPage}
          style={styles.navButton}
          activeOpacity={1}>
          <SvgIcon name={'leftArrow'} w={13} h={13} />
        </TouchableOpacity>
      ) : null}
      {renderPages()}
      {currentPage < totalPages ? (
        <TouchableOpacity
          onPress={handleNextPage}
          style={styles.navButton}
          activeOpacity={1}>
          <SvgIcon name={'rightArrow'} w={13} h={13} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: size(10),
  },
  pageButton: {
    padding: size(3),
  },
  ellipsisButton: {
    padding: size(10),
    backgroundColor: 'transparent',
  },
  navButton: {
    padding: size(10),
  },
  pagenum: {
    fontFamily: FONTS.Inter500,
    color: Colors.darkBase5,
    fontSize: FONT_SIZE.small,
  },
  currentPageNum: {
    fontFamily: FONTS.Inter500,
    color: Colors.darkBase1,
    fontSize: FONT_SIZE.small,
  },
});

export default AppPagination;
