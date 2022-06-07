import { configureStore } from '@reduxjs/toolkit';
import { asyncDispatchMiddleware } from './asyncDispatchMiddleware';

import productReducer from '../features/product/productSlice';
import historyReducer from '../features/productHistory/productHistorySlice';




export const store = configureStore({
  reducer: {
    product : productReducer,
    history : historyReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncDispatchMiddleware),
});
