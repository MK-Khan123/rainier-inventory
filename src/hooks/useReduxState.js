import { useContext } from 'react';
import { CartContext } from '../contexts/CartProvider';

const useReduxState = () => useContext(CartContext);

export default useReduxState;