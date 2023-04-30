import { createContext, useContext, useEffect, useReducer } from "react";
import { ADD_TO_CART, ADD_TO_WISHLIST, COUNT_CART_TOTALS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, TOGGLE_AMOUNT } from "../actions";
import { cart_reducer } from "../reducer/cart_reducer";

const CartContext= createContext();

const initialState= {
    cart: [],
    wishlist: [],
    total_cart_items: 0,
    total_price: 0
};

const CartProvider= ({ children })=>{
    const [state, dispatch]= useReducer(cart_reducer, initialState);

    const addToWishlist= (product)=>{
        dispatch({ type: ADD_TO_WISHLIST, payload: product });
    };
    const removeFromWishlist= (productId)=> {
        dispatch({ type: REMOVE_FROM_WISHLIST, payload: productId });
    };
    const addToCart= (id, product, amount)=>{
        dispatch({ type: ADD_TO_CART, payload: { id, product, amount } });
    }; 
    const removeFromCart= (productId)=>{
        dispatch({ type: REMOVE_FROM_CART, payload: productId });
    };
    const toggleAmount= (itemId, toggleType, itemAmount)=>{
        dispatch({ type: TOGGLE_AMOUNT, payload: {itemId, toggleType, itemAmount} });
    };

    useEffect(()=>{
        dispatch({ type: COUNT_CART_TOTALS });
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToWishlist, removeFromWishlist, addToCart, removeFromCart, toggleAmount }}>
            { children }
        </CartContext.Provider>
    )
};
export default CartProvider;

export const useCartContext= ()=>{
    return useContext(CartContext);
}