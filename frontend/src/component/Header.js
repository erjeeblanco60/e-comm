import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {logout} from '../action/usersAction';
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }



    return (
        <div>
  <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
      <Container> 
        <LinkContainer to='/'> 
             <Navbar.Brand>Ecomm App</Navbar.Brand>
         </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">


    {/* Use router dom and pass the search box as a props */}
      <Route render={({history})=> <SearchBox history={history}/> }/> 

    <Nav className="ml-auto">
      {/* Cart Link */}
      <LinkContainer to='/cart'> 
           <Nav.Link> <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
      </LinkContainer> 


      {/* if user exist then(?) these */}
      {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                   </LinkContainer>
                  <NavDropdown.Item href='/' onClick={logoutHandler}> Logout </NavDropdown.Item>
                </NavDropdown>
                // else sign in
              ) : (

                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}


              {userInfo && userInfo.isAdmin && (
                 <NavDropdown title='Admin' id='adminmenu'>
                   
                   <LinkContainer to='/admin/dashboard'>
                   <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>

                 <LinkContainer to='/admin/userlist'>
                   <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/productlist'>
                   <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/orderlist'>
                   <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item href='/' onClick={logoutHandler}> Logout </NavDropdown.Item>

               </NavDropdown>

              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}


export default Header


//rafce