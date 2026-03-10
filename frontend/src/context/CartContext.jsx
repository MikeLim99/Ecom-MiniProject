import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useAuthContext } from "../hooks/Auth/useAuthContext";

export const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
};

const getCartKey = (user) => (user?._id ? `cartItems_${user._id}` : null);

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CART': {
            return {
                ...state,
                cartItems: action.payload || []
            };
        }
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
    const { user } = useAuthContext();
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        if (!user?._id){
            dispatch({ type: 'SET_CART', payload: [] });
            return;
        }

        const key = getCartKey(user);
        const savedCart = JSON.parse(localStorage.getItem(key)) || [];
        dispatch({ type: 'SET_CART', payload: savedCart})
    }, [user?._id])

    // useEffect(() => {
    //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // }, [state.cartItems]);
    
      useEffect(() => {
    if (!user?._id) return;
    const key = getCartKey(user);
    localStorage.setItem(key, JSON.stringify(state.cartItems));
  }, [state.cartItems, user?._id]);

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}