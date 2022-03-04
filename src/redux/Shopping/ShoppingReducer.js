
import * as actionTypes from './ShoppingTypes'
import titles from '../../DataStorage'

const initialState = {
    products: titles,  // {id,title,description price, image}
    cart: [], // {id,title,description price, image,qty}
    currentItem: null,
};

const shoppingReduer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            //Get the items data from the products arrays
            const item = state.products.find( product => product.id === action.payload.id)

            // let push = localStorage.setItem('id', JSON.stringify(item))

            // let pull = JSON.parse(localStorage.getItem('id'))

            //Check if Item is in the cart ready    
            const inCart = state.cart.find(item =>
                item.id === action.payload.id ? true : false)

        return {
            ...state,
            cart: inCart ? state.cart.map(item => 
                item.id === action.payload.id ? {...item, qty: item.qty +1} : item)
            : [...state.cart, {...item, qty: 1}] 
            
            // cart: pull.id === action.payload.id
        }
            
        case actionTypes.REMOVE_FROM_CART: return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id),
        }
            

        case actionTypes.ADJUST_QTY: return {
            ...state,
            cart: state.cart.map(item => 
                item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
        }
            
        case actionTypes.LOAD_CURRENT_ITEM: return {
            ...state,
            currentItem: action.payload,
        }
        
        default: return state
            
    }
}


export default shoppingReduer