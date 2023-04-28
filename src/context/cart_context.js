import { createContext, useContext, useReducer } from "react";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions";
import { cart_reducer } from "../reducer/cart_reducer";

const CartContext= createContext();

const initialState= {
    cart: [],
    wishlist: []
};

const CartProvider= ({ children })=>{
    const [state, dispatch]= useReducer(cart_reducer, initialState);

    const addToWishlist=(product)=>{
        dispatch({ type: ADD_TO_WISHLIST, payload: product });
    };
    const removeFromWishlist= (productId)=> {
        dispatch({ type: REMOVE_FROM_WISHLIST, payload: productId });
    };

    return (
        <CartContext.Provider value={{ ...state, addToWishlist, removeFromWishlist }}>
            { children }
        </CartContext.Provider>
    )
};
export default CartProvider;

export const useCartContext= ()=>{
    return useContext(CartContext);
}