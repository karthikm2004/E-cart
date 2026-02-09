import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist: (state, payload) => {
            if (state.find(item => item.id == payload.payload.id)) {
                alert("Product already Exist in Whishlist")
            }
            else {
                state.push(payload.payload)
            }

        },
        removeFromWishlist: (state, payload) => {
           return state = state.filter(item => item.id != payload.payload)
        }
    }
})

export default wishlistSlice.reducer
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions