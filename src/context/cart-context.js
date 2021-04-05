import {createContext, useContext, useReducer} from "react";
import {data as products} from "./../data/data" 
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                products: state.products.map((item) => 
                    item.id === action.payload.id
                    ? {...item, inCart:true, quantity:item.quantity+1}
                    :item
                )
            }
        case "REMOVE_FROM_CART":
            return {
                products: state.products.map((item) => 
                    item.id === action.payload.id
                    ? {...item, inCart:false, quantity:0}
                    :item
                )
        }
        case "INCREMENT":
            return {
                products: state.products.map((item) =>
                item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
                )
            };
        case "DECREMENT":
            return {
                products: state.products.map((item) =>
                item.id === action.payload.id 
                ? (item.quantity > 1?{ ...item, quantity: item.quantity - 1 }: { ...item, inCart:false,quantity: 0 })
                : item
                )
            };
        case "ADD_TO_WISHLIST":
            return {
                products: state.products.map((item) => 
                    item.id === action.payload.id
                    ? {...item, wishListed:true}
                    :item
                )
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                products: state.products.map((item) => 
                    item.id === action.payload.id
                    ? {...item, wishListed:false}
                    :item
                )
            }
        default:
            return {...state}

    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, { products:[...products].map((item) => ({...item, quantity:0, inCart:false, wishListed:false}))});
  
    return (
      <CartContext.Provider value={{ products: state.products, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  }
  
