import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MarketStock} from '../../helper/interface';

interface OrdersState {
  orders: MarketStock[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrder(state, action: PayloadAction<MarketStock>) {
      const isDataExists = state.orders.some(
        order => order.symbol === action.payload.symbol,
      );
      if (!isDataExists) {
        state.orders.push(action.payload);
      }
    },

    deleteOrder(state, action: PayloadAction<string>) {
      state.orders = state.orders.filter(
        order => order.symbol !== action.payload,
      );
    },

    placeOrder(state) {
      state.orders = [];
    },
  },
});

export const {addToOrder, deleteOrder, placeOrder} = ordersSlice.actions;

export default ordersSlice.reducer;
