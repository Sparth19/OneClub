import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchSearchResultsApi} from '../../services/api';

export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (searchQuery: string) => {
    try {
      const response = await fetchSearchResultsApi(searchQuery);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
