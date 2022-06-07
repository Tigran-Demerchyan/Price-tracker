import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addNewProduct, fetchProductByEmail } from './productAPI';

const initialState = {
  products: [],

};


export const fetchProductByEmailAsync = createAsyncThunk(
  'product/fetchProductByEmai',
  async (email) => {
    const response = await fetchProductByEmail(email);

    return response;
  }
);


export const addProductAsync = createAsyncThunk(
  'product/addProduct',
  async (product) => {
    const response = await addNewProduct(product);

    return response;
  }
);


// function refreshProducts(state, action) {


//   action.asyncDispatch(fetchProductByEmailAsync(state.email));
// }

export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByEmailAsync.pending, (state) => {
        // state.status = 'loading';
      })
      .addCase(fetchProductByEmailAsync.fulfilled, (state, action) => {


        state.products = action.payload;
      });
  },
});



export const selectProducts = (state) => state.product.products;


export default productSlice.reducer;