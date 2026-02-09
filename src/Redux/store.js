import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from './slices/productSlice'
import wishlistSliceReducer from './slices/wishlistSlices'
import cartSliceReducer from './slices/cartSlice'

const store=configureStore({
    reducer:{
        productreducer:productSliceReducer,
        wishlistReducer:wishlistSliceReducer,
        cartReducer:cartSliceReducer
        

    }
})


export default store