import { createContext, useContext, useEffect, useReducer } from "react";
import { product_reducer } from "../reducer/product_reducer";
import { CLOSE_NAV_SIDEBAR, GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, OPEN_NAV_SIDEBAR } from "../actions";

const ProductContext= createContext();

const initialState= {
    showNavSidebar: false,
    products: [],
    products_loading: false,
    products_error: false
};

const ProductProvider= ({ children })=>{
    const [state, dispatch]= useReducer(product_reducer, initialState);

    const openNavSidebar= ()=>{
        dispatch({ type: OPEN_NAV_SIDEBAR });
    };
    const closeNavSidebar= ()=>{
        dispatch({ type: CLOSE_NAV_SIDEBAR });
    };
    const fetchProducts= ()=>{
        dispatch({ type: GET_PRODUCTS_BEGIN });
        fetch('https://dummyjson.com/products')
        .then(response=> response.json())
        .then(data=> {
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.products });
        })
        .catch(e=>{
            dispatch({ type: GET_PRODUCTS_ERROR });
        });
    };

    useEffect(()=>{
        fetchProducts();
    }, []);

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