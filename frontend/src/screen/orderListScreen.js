import React,{ useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../component/message.js'
import Loader from '../component/loader.js'
import {getOrders} from '../action/orderAction.js'


const OrderListScreen = ({history}) => {

    const dispatch = useDispatch()

   const orderList = useSelector(state => state.orderList)
         const {loading, error,orders } = orderList
    
         const userLogin = useSelector((state) => state.userLogin)
         const { userInfo } = userLogin
    

    
    useEffect(()=> { 
        if (userInfo && userInfo.isAdmin) {
            dispatch(getOrders())   

        } else {
            history.push('/login')
         }
            //Loop run again is deleted
    },[dispatch,history,userInfo])

        console.log()

    return (
        <>
            <h1> orders</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'> {error} </Message> 
            : (
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead> 
                            <tr> 
                          
                                <th>Date </th>
                                <th>SHIPPING ADDRESS </th>
                                <th>NAME </th>
                                <th>EMAIL </th>
                                <th>Total Price </th>
                                <th>Paid </th>
                                <th> Delivered</th>
                                <th> </th>
                            </tr>

                        </thead>
                        <tbody> 
                            {orders.map(order => (
                                <tr key={order._id}> 
                    
                               <td> {order.createdAt.substring(0, 10)} </td> 
                                    <td>{order.shippingAddress.address} </td>
                                    <td>{order.user.name}</td>
                                    <td>{order.user.email}</td>
                                    <td> ${order.totalPrice}</td>
                                    <td>    
                                        {order.isPaid ? (<i className='fas fa-check' style={
                                            {color: 'green'}}> </i> 
                                            ) : (
                                                <i className='fas fa-times' style={{color: 'red'}}> </i>
                                            )}
                                         </td>
                                    <td>    
                                        {order.isDelivered ? (<i className='fas fa-check' style={
                                            {color: 'green'}}> </i> 
                                            ) : (
                                                <i className='fas fa-times' style={{color: 'red'}}> </i>
                                            )}
                                         </td>
                                                <td> 
                                                    <LinkContainer to={`/orders/${order._id}/`}>
                                                    <Button variant='success' className='btn-sm'> 
                                                        <i className='fas fa-eye'></i>
                                                    </Button>
                                                    </LinkContainer>
                                                </td>

                                </tr>
                            ))}

                        </tbody>

                    </Table>
             )}
        </>
    )
}

export default OrderListScreen
