import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {cartReducer} from './reducers/cartReducers.js'

import {
   createStore, 
   combineReducers, 
   applyMiddleware } from 'redux'

import { 
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewReducer} from './reducers/productReducers.js'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,userEditReducer} from './reducers/userReducers.js'

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myorderReducer,
  orderListReducer,
  orderDeliverReducer} from './reducers/orderReducer.js'



const reducer = combineReducers({

  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReview: productReviewReducer,
  cart: cartReducer,


  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userEdit: userEditReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrderDetails: myorderReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
})

//if item found in local store then parse it else return an array
const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')) : []

//if item found in local store then parse it else return an array
const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) 
: null

// store and parse empty object
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
? JSON.parse(localStorage.getItem('shippingAddress')) 
: {}

// store and parse else null
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') 
? JSON.parse(localStorage.getItem('paymentMethod')) 
: null



const initialState = {
  cart: { 
    cartItems: cartItemFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage
  },
  userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store