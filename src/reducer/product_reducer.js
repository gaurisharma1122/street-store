import { CLOSE_NAV_SIDEBAR, OPEN_NAV_SIDEBAR } from "../actions";

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
    }
};