import {createSlice} from '@reduxjs/toolkit';
import {fetchSearchResults} from '../actions/searchActions';
import {MarketStock} from '../../helper/interface';

interface SearchState {
  searchQuery: string;
  loading: boolean;
  error: string | null;
  searchResults: MarketStock[];
}

const initialState: SearchState = {
  searchQuery: '',
  loading: false,
  error: null,
  searchResults: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearchResults.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {setSearchQuery} = searchSlice.actions;

export default searchSlice.reducer;
