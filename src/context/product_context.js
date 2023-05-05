import { createContext, useContext, useEffect, useReducer } from "react";
import { product_reducer } from "../reducer/product_reducer";
import { CLOSE_NAV_SIDEBAR, CLOSE_SEARCH_BAR, GET_CATEGORIES_BEGIN, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS, GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_SEARCH_RESULT_BEGIN, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS, OPEN_NAV_SIDEBAR, OPEN_SEARCH_BAR, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR, RESET_SEARCH_RESULTS } from "../actions";

const ProductContext= createContext();

const initialState= {
    showNavSidebar: false,
    showSearchBar: false,
    products: [],
    products_loading: false,
    products_error: false,
    categories: [],
    categories_loading: false,
    categories_error: false,
    single_product: {},
    single_product_loading: false,
    single_product_error: false,
    search_result: [],
    search_result_loading: false,
    search_result_error: false
};

const ProductProvider= ({ children })=>{
    const [state, dispatch]= useReducer(product_reducer, initialState);

    const openNavSidebar= ()=>{
        dispatch({ type: OPEN_NAV_SIDEBAR });
    };
    const closeNavSidebar= ()=>{
        dispatch({ type: CLOSE_NAV_SIDEBAR });
    };
    const openSearchBar= ()=>{
        dispatch({ type: RESET_SEARCH_RESULTS });
        dispatch({ type: OPEN_SEARCH_BAR });
    };
    const closeSearchBar= ()=>{
        dispatch({ type: CLOSE_SEARCH_BAR });
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
    const fetchCategories= ()=>{
        dispatch({ type: GET_CATEGORIES_BEGIN });
        fetch('https://dummyjson.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
        })
        .catch(e=>{
            dispatch({ type: GET_CATEGORIES_ERROR });
        })
    };
    const fetchSingleProduct=(productId)=>{
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(response=> response.json())
        .then(data=> {
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
        })
        .catch(e=>{
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        })
    };
    const fetchSearchResults=(searchQuery)=>{
        dispatch({ type: GET_SEARCH_RESULT_BEGIN });
        fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(response=> response.json())
        .then(data=>{
            dispatch({ type: GET_SEARCH_RESULT_SUCCESS, payload: data.products });
            
        })
        .catch(e=>{
            dispatch({ type: GET_SEARCH_RESULT_ERROR });
        })
    };

    useEffect(()=>{
        fetchProducts();
        fetchCategories();
    }, []);

    return (
        <ProductContext.Provider value={{ ...state, openNavSidebar, closeNavSidebar, openSearchBar, closeSearchBar, fetchSingleProduct, fetchSearchResults }}>
            { children }
        </ProductContext.Provider>
    );
};
export default ProductProvider;

export const useProductContext= ()=>{
    return useContext(ProductContext);
};