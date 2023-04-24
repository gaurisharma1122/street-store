import { CLOSE_NAV_SIDEBAR, GET_CATEGORIES_BEGIN, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS, GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, OPEN_NAV_SIDEBAR } from "../actions";

export const product_reducer= (state, action)=>{
    switch(action.type){
        case OPEN_NAV_SIDEBAR:
            {
                return { ...state, showNavSidebar: true };
            }; break;
        case CLOSE_NAV_SIDEBAR:
            {
                return { ...state, showNavSidebar: false };
            }; break;
        case GET_PRODUCTS_BEGIN:
            {
                return { ...state, products_loading: true, products_error: false };
            }; break;
        case GET_PRODUCTS_SUCCESS:
            {
                return { ...state, products_loading: false, products: action.payload };
            }; break;
        case GET_PRODUCTS_ERROR:
            {
                return { ...state, products_loading: false, products_error: true };
            }; break;
        case GET_CATEGORIES_BEGIN:
            {
                return { ...state, categories_loading: true, categories_error: false };
            }; break;
        case GET_CATEGORIES_SUCCESS:
            {
                return { ...state, categories_loading: false, categories: action.payload };
            }; break;
        case GET_CATEGORIES_ERROR:
            {
                return { ...state, categories_error: true };
            }; break;
    }
};