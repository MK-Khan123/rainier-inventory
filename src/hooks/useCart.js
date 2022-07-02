import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart,
    removeFromCart,
    addQuantity,
    reduceQuantity,
    emptyCart
} from '../store/cart';

const useCart = () => {

    //Cart Related functions and state    
    const cartItems = useSelector(state => state.entities.cart);

    const dispatch = useDispatch();

    //To calculate the total bill on Cart
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const cartProductPrice = cartItems.map(product => product.quantity * product.price);
        const totalProductPrice = cartProductPrice.reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0).toFixed(2);
        setCartTotal(parseFloat(totalProductPrice));
    }, [cartItems]);

    //Cart management related functions

    const handleAddToCart = (inventoryItem, itemPrice) => {
        const productData = {
            ...inventoryItem,
            price: itemPrice,
            quantity: 1
        };
        dispatch(addToCart(productData));
    }

    const handleRemoveFromCart = (id) => dispatch(removeFromCart({ id }));

    const handleAddQuantity = (id) => {
        dispatch(addQuantity({ id }));
    };

    const handleReduceQuantity = (id) => {
        dispatch(reduceQuantity({ id }));
    };

    const handleEmptyCart = () => dispatch(emptyCart());

    console.log(cartItems);

    return {
        handleAddToCart,
        handleRemoveFromCart,
        handleAddQuantity,
        handleReduceQuantity,
        handleEmptyCart,
        cartTotal,
        cartItems
    };
};

export default useCart;