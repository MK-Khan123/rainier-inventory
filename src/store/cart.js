import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (cart, action) => {
            cart.push(action.payload);
        },

        removeFromCart: (cart, action) => cart.filter(product => product.id !== action.payload.id),

        addQuantity: (cart, action) => {
            const product = cart.find(product => product.id === action.payload.id);
            product.quantity = product.quantity + 1;
        },

        reduceQuantity: (cart, action) => {
            const product = cart.find(pd => pd.id === action.payload.id);
            if (product.quantity === 1) {
                product.quantity = 1;
            } else {
                product.quantity = product.quantity - 1;
            }
        },

        emptyCart: (cart, action) => cart = []
    }
});

export const { addToCart, removeFromCart, addQuantity, reduceQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;