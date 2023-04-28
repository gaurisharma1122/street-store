import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions";

export const cart_reducer= (state, action)=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
            {
                return { ...state, wishlist: [...state.wishlist, action.payload] };
            }; break;
        case REMOVE_FROM_WISHLIST:
            {
                let newWishlist= state.wishlist.filter((item)=> item.id!==action.payload);
                return { ...state, wishlist: newWishlist };
            }; break;
    }
}