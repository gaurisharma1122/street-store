import { createContext, useContext, useReducer } from "react";
import { product_reducer } from "../reducer/product_reducer";
import { CLOSE_NAV_SIDEBAR, OPEN_NAV_SIDEBAR } from "../actions";

const ProductContext= createContext();

const initialState= {
    showNavSidebar: false,
};

const ProductProvider= ({ children })=>{
    const [state, dispatch]= useReducer(product_reducer, initialState);

    const openNavSidebar= ()=>{
        dispatch({ type: OPEN_NAV_SIDEBAR });
    };
    const closeNavSidebar= ()=>{
        dispatch({ type: CLOSE_NAV_SIDEBAR });
    }
    return (
        <ProductContext.Provider value={{ ...state, openNavSidebar, closeNavSidebar }}>
            { children }
        </ProductContext.Provider>
    );
};
export default ProductProvider;

export const useProductContext= ()=>{
    return useContext(ProductContext);
};