import axios from 'axios';

const API_KEY = process.env.API_KEY;

export const fetchMarketTrendsApi = async () => {
  const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/market-trends',
    params: {
      trend_type: 'GAINERS',
      country: 'us',
      language: 'en',
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data.trends;
  } catch (error: any) {
    throw error;
  }
};

export const fetchSearchResultsApi = async (searchQuery: string) => {
  const options = {
    method: 'GET',
    url: 'https://real-time-finance-data.p.rapidapi.com/search',
    params: {
      query: searchQuery,
      language: 'en',
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data.stock;
  } catch (error: any) {
    throw error;
  }
};
