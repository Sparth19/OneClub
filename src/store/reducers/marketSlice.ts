import {createSlice} from '@reduxjs/toolkit';
import {MarketStock} from '../../helper/interface';
import {fetchMarketTrends} from '../actions/marketActions';

interface MarketState {
  stocksList: MarketStock[] | [];
  loading: boolean;
  error: string | null;
}

const initialState: MarketState = {
  stocksList: [],
  loading: false,
  error: null,
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMarketTrends.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMarketTrends.fulfilled, (state, action) => {
        state.loading = false;
        state.stocksList = action.payload;
      })
      .addCase(fetchMarketTrends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch market trends';
      });
  },
});

export default marketSlice.reducer;
