import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import Homescreen from './screen/Homescreen'
import ProductsScreen from './screen/ProductsScreen'
import CartScreen from './screen/CartScreen.js'
import {LoginScreen} from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import ProfileScreen from './screen/ProfileScreen'
import ShippingScreen from './screen/ShippingScreen'
import PaymentScreen from './screen/PaymentScreen'
import PlaceOrderScreen from './screen/PlaceOrderScreen'
import OrderScreen from './screen/orderScreen'
import UserListScreen from './screen/userListScreen' 
import UserEditScreen from './screen/userEditScreen'
import ProductListScreen from './screen/ProductListScreen'
import ProductEditScreen from './screen/ProductEditScreen'
import OrderListScreen from './screen/orderListScreen'
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <Route path='/search/:keyword' component={Homescreen} exact />
        <Route path='/' component={Homescreen} exact />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/product/:id' component={ProductsScreen} />
          {/* id is optional  '?' */}
          <Route path='/cart/:id?' component={CartScreen} /> 
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen}  />
          <Route path='/orders/:id' component={OrderScreen} />
          <Route path='/admin/orderlist/' component={OrderListScreen} />
           
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/productlist/' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
