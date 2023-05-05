import { FILTER_PRODUCTS, LOAD_PRODUCTS, SHOW_GRID_VIEW, SHOW_LIST_VIEW, SORT_PRODUCTS, UPDATE_FILTER, UPDATE_SORT } from "../actions";

export const filter_reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            {
                return { ...state, all_products: action.payload, filtered_products: action.payload };
            }; break;
        case SHOW_GRID_VIEW:
            {
                return { ...state, gridView: true };
            }; break;
        case SHOW_LIST_VIEW:
            {
                return { ...state, gridView: false };
            }; break;
        case UPDATE_SORT:
            {
                return { ...state, sort_by: action.payload };
            }; break;
        case SORT_PRODUCTS:
            {
                const { filtered_products, sort_by }= state;
                let tempProducts= [...filtered_products];
                if(sort_by==='price-lowest'){
                    tempProducts= tempProducts.sort((a,b)=> a.price-b.price);
                }
                if(sort_by==='price-highest'){
                    tempProducts= tempProducts.sort((a,b)=> b.price-a.price);
                }
                if(sort_by==='name-a'){
                    tempProducts= tempProducts.sort((a,b)=> a.title.localeCompare(b.title));
                }
                if(sort_by==='name-z'){
                    tempProducts= tempProducts.sort((a,b)=> b.title.localeCompare(a.title));
                }
                return { ...state, filtered_products: tempProducts };
            }; break;
        case UPDATE_FILTER:
            {
                const { category }= action.payload;
                return { ...state, filter: {...state.filter, category }};
            }; break;
        case FILTER_PRODUCTS:
            {
                return { ...state, filtered_products: action.payload };
            }; break;
    }
};