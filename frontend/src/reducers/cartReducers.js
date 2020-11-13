import {CART_ADD_ITEM, CART_ITEM_RESET, CART_REMOVE_ITEM,CART_SAVE_PAYMENT_METHOD,CART_SAVE_SHIPPING_ADDRESS} from '../constant/cartConst.js'

                            //value of state are an array of items and pass the action
export const cartReducer = (state= {cartItems: [], shippingAddress: {}}, action) => { 
        switch(action.type) { 
            case CART_ADD_ITEM: 
                    const item = action.payload


                    //find an existing item in state cart
                    const existItem = state.cartItems.find(x => x.product === item.product) 


                    if(existItem) { 
                        return {
                            ...state, 
                            //Map the current item if does exist, then(?) it will return an item else(:) it will be x
                            cartItems: state.cartItems.map(x=> x.product === existItem.product ? item : x)
                        }

                    } else { 

                        //is doesnt exist , we will push it in array, we will return to our state
                        return { 
                            //spread that state across the object
                            ...state,
                            //spread cart item
                            cartItems: [...state.cartItems, item]
                        }
                    }
            
            case CART_REMOVE_ITEM: 
                    return { 
                        ...state,
                        cartItems: state.cartItems.filter(x=> x.product !== action.payload)
                    }


    

             case CART_SAVE_SHIPPING_ADDRESS:
                  return {
                        ...state,
                          shippingAddress: action.payload,
                                 }

            case CART_SAVE_PAYMENT_METHOD:
                return {
                             ...state,
                          paymentMethod: action.payload,

                                     }
                                     
            
                                     case CART_ITEM_RESET: 
                                     return {
                                         
                                     }
          
            default: 
            return state
        }
}