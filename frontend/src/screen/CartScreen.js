import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../component/message.js'
import { addToCart, removeFromCart } from '../action/cartActions.js'

const CartScreen = ({match, location, history}) => {

    // id = 5f8cafa58e57b91f283e95cc || location.search ?qty=1 
   const productId = match.params.id
   
    // get the value of query string and split the value
    const qty = location.search ? location.search.split('=')[1]: 1

    const dispatch = useDispatch()

    //access the state

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

        useEffect(()=> { 

            //If product exist ? dispatch
            if (productId) {
                dispatch(addToCart(productId, qty))
              }
            }, [dispatch, productId, qty])

        const removeFromCartHandler = (id) => {
            dispatch(removeFromCart(id))
          }
        
          const checkoutHandler = () => {
            // are you logedin? if false redirect to shipping
            history.push('/login?redirect=shipping')
          }

        return (
            <Row>
                 

              <Col md={8}>
                <h1>Shopping Cart</h1>
                <Link className='btn btn-dark my-3' to='/'>
                   Go Back
                   </Link>
                {cartItems.length === 0 ? (
                  <Message>
                    Your cart is empty <Link to='/'>Go Back</Link>
                  </Message>
                ) : (
                  <ListGroup variant='flush'>
                    {cartItems.map((item) => (
                      <ListGroup.Item key={item.product}>
                        <Row>
                          <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded />
                          </Col>
                          <Col md={3}>
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </Col>
                          <Col md={2}>${item.price}</Col>
                          <Col md={2}>
                          <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                          </Col>
                          <Col md={2}>
                            <Button
                              type='button'
                              variant='light'
                              onClick={() => removeFromCartHandler(item.product)}
                            >
                              <i className='fas fa-trash'></i>
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Col>
              
              <Col md={4}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      
                      <h3>
                         Subtotal ({cartItems.reduce((acc, item) =>
                                     acc += item.qty * 1, 0 ) })  items
                      </h3>

                      $
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </ListGroup.Item>
                        
                    <ListGroup.Item>
                      <Button
                        type='button'
                        className='btn-block'
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                      >
                        Proceed To Checkout
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )
        }
        
export default CartScreen