import { createContext, useContext, useEffect, useReducer } from "react";
import { filter_reducer } from "../reducer/filter_reducer";
import { LOAD_PRODUCTS, SHOW_GRID_VIEW, SHOW_LIST_VIEW, SORT_PRODUCTS, UPDATE_SORT } from "../actions";
import { useProductContext } from "./product_context";

const FilterContext= createContext();

const initialState={
    gridView: true,
    all_products: [],
    filtered_products: [],
    sort_by: 'price-lowest',
};

const FilterProvider= ({ children })=>{
    const { products }= useProductContext();
    const [state, dispatch]= useReducer(filter_reducer, initialState);

    const showGridView= ()=>{
        dispatch({ type: SHOW_GRID_VIEW });
    };
    const showListView= ()=>{
        dispatch({ type: SHOW_LIST_VIEW });
    };
    const updateSort= (sortValue)=>{
        dispatch({ type: UPDATE_SORT, payload: sortValue });
    };

    useEffect(()=>{
        dispatch({ type: SORT_PRODUCTS });
    }, [state.sort_by]);

    useEffect(()=>{
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);

   return <FilterContext.Provider value={{ ...state, showGridView, showListView, updateSort }}>
        { children }
    </FilterContext.Provider>
};
export default FilterProvider;

export const useFilterContext = ()=>{
    return useContext(FilterContext);
};