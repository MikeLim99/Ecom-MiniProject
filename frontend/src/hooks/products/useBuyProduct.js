import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import axios from 'axios';
import { useAuthContext } from '../Auth/useAuthContext';

export const useBuyProduct = () => {
    const { dispatch, cartItems } = useContext(CartContext);
    const productInCart = cartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity
    }));
    const { user } = useAuthContext();
    
    const buyProduct = async () => {
        try {
            const response = await axios.post('http://localhost:3000/customer/transactions/buy', {
                userId: user._id,
                items: productInCart
            });
            alert(response.data.message);
            dispatch({ type: 'CLEAR_CART' });
        } catch (error) {
            console.error("Error buying products: ", error);
        }
    }

    return {
        buyProduct
    }
}