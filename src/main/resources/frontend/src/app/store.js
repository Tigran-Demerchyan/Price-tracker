import { configureStore } from '@reduxjs/toolkit';
import { asyncDispatchMiddleware } from './asyncDispatchMiddleware';

import productReducer from '../features/product/productSlice';




export const store = configureStore({
  reducer: {
    product : productReducer

    // counter: counterReducer,
    // category: categoryReducer,
    // restaurant: restaurantReducer,
    // searchParams :  searchParamReducer,
    // location : locationReducer,
    // visitTimes : visitTimesReducer


  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncDispatchMiddleware),
});
