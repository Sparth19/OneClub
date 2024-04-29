import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchMarketTrendsApi} from '../../services/api';

export const fetchMarketTrends = createAsyncThunk(
  'market/fetchMarketTrends',
  async () => {
    try {
      const response = await fetchMarketTrendsApi();
      return response;
    } catch (error) {
      throw error;
    }
  },
);
