import { createContext, useContext, useEffect, useReducer } from "react";
import { filter_reducer } from "../reducer/filter_reducer";
import { LOAD_PRODUCTS, SHOW_GRID_VIEW, SHOW_LIST_VIEW, SORT_PRODUCTS, UPDATE_FILTER, UPDATE_SORT, FILTER_PRODUCTS } from "../actions";
import { useProductContext } from "./product_context";

const FilterContext = createContext();

const initialState = {
    gridView: true,
    all_products: [],
    filtered_products: [],
    filter: {
        category: 'all',
    },
    sort_by: 'price-lowest',
};

const FilterProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(filter_reducer, initialState);

    const showGridView = () => {
        dispatch({ type: SHOW_GRID_VIEW });
    };
    const showListView = () => {
        dispatch({ type: SHOW_LIST_VIEW });
    };
    const updateSort = (sortValue) => {
        dispatch({ type: UPDATE_SORT, payload: sortValue });
    };
    const updateFilter = (category) => {
        dispatch({ type: UPDATE_FILTER, payload: { category } });
    };
    const filterProducts = () => {
        const { category } = state.filter;
        if (category === 'all') {
            dispatch({ type: FILTER_PRODUCTS, payload: state.all_products });
        }
        else {
            fetch(`https://dummyjson.com/products/category/${category}`)
                .then(response => response.json())
                .then(data => {
                    dispatch({ type: FILTER_PRODUCTS, payload: data.products });
                });
        }
    };

    useEffect(() => {
        dispatch({ type: SORT_PRODUCTS });
    }, [state.sort_by]);

    useEffect(() => {
        filterProducts();
    }, [state.filter]);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

    return <FilterContext.Provider value={{ ...state, showGridView, showListView, updateSort, updateFilter }}>
        {children}
    </FilterContext.Provider>
};
export default FilterProvider;

export const useFilterContext = () => {
    return useContext(FilterContext);
};