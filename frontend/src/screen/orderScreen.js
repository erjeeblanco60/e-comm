import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {PayPalButton} from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../component/message.js'
import Loader from '../component/loader.js'
import { getOrderDetails, payOrder,deliverOrder } from '../action/orderAction.js'
import { ORDER_PAY_RESET,ORDER_DELIVER_RESET} from '../constant/orderConst'

const OrderScreen = ({ match,history }) => {

  //id 
  const orderId = match.params.id

  //SDK FOR PAYPAL
  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()


  //order details for order summary
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails


  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  
 //orderpay state
  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }


  //loop useeffect and display the summary and display the getorderdetails
  useEffect(() => {
      if(!userInfo) { 
        history.push('/login')
      }
        const addPaypalScript = async() => { 
            const {data: CLIENTid} = await axios.get('/api/config/paypal')
            //vanilla
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${CLIENTid}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
                    }
            document.body.appendChild(script)
            }
                // if !order or order._id != to req.match.id else dispatch details and if sucessPay, show the updated
                if(!order || successPay || successDeliver || order._id !== orderId) { 
                  //reset pay to stop the refreshing
 
                dispatch({type: ORDER_PAY_RESET})
                dispatch({type: ORDER_DELIVER_RESET})
                   //update the details order details action to show 
                dispatch(getOrderDetails(orderId))
                     //if order is not paid
                    } else if(!order.isPaid) {
                    //show paypal  
                if(!window.paypal) { 
                    addPaypalScript()
                    } else { 
                        setSdkReady(true)
                    }
                    }
    
  }, [order, orderId, dispatch,successPay,successDeliver,history,userInfo] )

  //dispatch payment result to action order
  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult))
  }

  const deliverHandler = () => { 
    dispatch(deliverOrder(order))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1>Order ID:  {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              {/* show paypal if not paid || show paypal if userLogin is === to user who own the order . 
              you cant pay is the order is not yours */}
              {!order.isPaid && userInfo._id === order.user._id && (
                  <ListGroup.Item> 
                      {loadingPay && <Loader /> }
                      {!sdkReady ? (
                     <Loader /> 
                     ) : (
                         <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler}/>
                     )} 
                  </ListGroup.Item>
              )}

                                            {/* Only for admin */}
                                            
                            {loadingDeliver && <Loader />}
                          {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                              <ListGroup.Item> 
                                    <Button type='button' className='btn btn-block' onClick={deliverHandler}> Mark as Delivered</Button>
                              </ListGroup.Item>
                            )}


            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen