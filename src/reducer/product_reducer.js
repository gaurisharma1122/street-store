import { CLOSE_NAV_SIDEBAR, CLOSE_SEARCH_BAR, GET_CATEGORIES_BEGIN, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS, GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_SEARCH_RESULT_BEGIN, GET_SEARCH_RESULT_ERROR, GET_SEARCH_RESULT_SUCCESS, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS, OPEN_NAV_SIDEBAR, OPEN_SEARCH_BAR, RESET_SEARCH_RESULTS } from "../actions";

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
        case OPEN_SEARCH_BAR:
            {
                return { ...state, showSearchBar: true };
            }; break;
        case CLOSE_SEARCH_BAR:
            {
                return { ...state, showSearchBar: false };
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
        case GET_SINGLE_PRODUCT_BEGIN:
            {
                return { ...state, single_product_loading: true, single_product_error: false };
            }; break;
        case GET_SINGLE_PRODUCT_SUCCESS:
            {
                return { ...state, single_product_loading: false, single_product: action.payload };
            }; break;
        case GET_SINGLE_PRODUCT_ERROR:
            {
                return { ...state, single_product_error: true };
            }; break;
        case GET_SEARCH_RESULT_BEGIN:
            {
                return { ...state, search_result_loading: true, search_result_error: false };
            }; break;
        case GET_SEARCH_RESULT_SUCCESS:
            {
                return { ...state, search_result_loading: false, search_result: action.payload };
            }; break;
        case GET_SEARCH_RESULT_ERROR:
            {
                return { ...state, search_result_error: true };
            }; break;
        case RESET_SEARCH_RESULTS:
            {
                return { ...state, search_result: [] };
            }; break;
    }
};