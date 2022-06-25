import { createContext } from 'react';
import useCart from '../hooks/useCart';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const context = useCart();

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;