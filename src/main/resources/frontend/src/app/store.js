import { configureStore } from '@reduxjs/toolkit';
import { asyncDispatchMiddleware } from './asyncDispatchMiddleware';

import productReducer from '../features/product/productSlice';
import historyReducer from '../features/productHistory/productHistorySlice';
import productsReducer from '../features/productDelete/productDeleteSlice';



export const store = configureStore({
  reducer: {
    product : productReducer,
    history : historyReducer,
    products : productsReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncDispatchMiddleware),
});
