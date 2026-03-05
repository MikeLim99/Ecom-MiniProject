import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
};

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':{
            const product = action.payload;
            const existingItem = state.cartItems.find((item) => item._id === product._id);

            if(existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item._id === product._id ? { ...item, quantity: item.quantity + 1} : item)
                };
            }
            
            return {
                ...state,
                cartItems: [...state.cartItems, { ...product, quantity: 1}]
            };
        }

        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item._id !== action.payload)
            }
        }

        case 'UPDATE_QUANTITY' : {
            return{
                ...state,
                cartItems: state.cartItems.map((item) => item._id === action.payload.id ? { ...item, quantity: Math.max(1, action.payload.quantity)}: item)
            }
        }

        case 'CLEAR_CART' : {
            return {
                ...state, cartItems: []
            };
        }

        default:
            return state;
    }   
};

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }, [state.cartItems]);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}