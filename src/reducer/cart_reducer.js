import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, REMOVE_FROM_CART, TOGGLE_AMOUNT, COUNT_CART_TOTALS, CLEAR_CART} from "../actions";

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
        case ADD_TO_CART:
            {
                const { id, product, amount }= action.payload;
                let tempItem= state.cart.find((item)=> item.id === id);
                if(tempItem){
                    let tempCart= state.cart.map((cartItem)=>{
                        if(cartItem.id === id){
                            let newAmount= cartItem.amount + amount;
                            if(newAmount> cartItem.product.stock){
                                newAmount= cartItem.product.stock
                            }
                            return { ...cartItem, amount: newAmount };
                        }
                        else{
                            return cartItem;
                        }
                    });
                    return { ...state, cart: tempCart };
                }
                else{
                    return { ...state, cart: [ ...state.cart, action.payload ] };
                }
            }; break;
        case REMOVE_FROM_CART:
            {
                let tempItem= state.cart.find((item)=> item.id===action.payload);
                let newCart= state.cart.filter((item)=> item.id!==action.payload);
                return { ...state, cart: newCart };
            }; break;
        case TOGGLE_AMOUNT:
            {
                const { itemId, toggleType, itemAmount }= action.payload;
                let tempCart= state.cart.map((cartItem)=>{
                    if(cartItem.id===itemId){
                        return { ...cartItem, amount: itemAmount};
                    }
                    else{
                        return cartItem;
                    }
                });
                return { ...state, cart: tempCart };
            }; break;
        case COUNT_CART_TOTALS:
            {
                const { total_cart_items, total_price }= state.cart.reduce((total, cartItem)=>{
                    const { amount, product }= cartItem;
                    total.total_cart_items += amount;
                    total.total_price += product.price * amount;
                    return total;
                }, {
                    total_cart_items: 0,
                    total_price: 0
                });
                return { ...state, total_cart_items, total_price };
            }; break;
        case CLEAR_CART:
            {
                return { ...state, cart: [] };
            }; break;
    }
}