import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../component/FormContainer.js'
import CheckoutSteps from '../component/CheckoutStep.js'
import {saveShippingAddress} from '../action/cartActions.js'

const ShippingScreen = ({history}) => {

    //select the data from state
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
  
    // if its in local Storage. it will pull out and fill
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
  
     const dispatch = useDispatch()

    const submitHandler = (e) => { 
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country}))
        history.push('/payment')
    }   


    return (
        <FormContainer>
          
            <CheckoutSteps step1 step2 />
            <h1> Shipping</h1>
            <Form onSubmit={submitHandler}> 

            {/* Address */}
                 <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
              <Form.Control
                type='address'
                placeholder='Enter address'
                // the value of the email is the email on state
                value={address}
                required
                //what ever we type in
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* City */}
            <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
              <Form.Control
                type='city'
                placeholder='Enter City'
                // the value of the email is the email on state
                value={city}
                required
                //what ever we type in
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>

                {/* Postal Code */}
            <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type='postalCode'
                placeholder='Enter Postal Code'
                // the value of the email is the email on state
                value={postalCode}
                required
                //what ever we type in
                onChange={(e) => setPostalCode(e.target.value)}
              ></Form.Control>
            </Form.Group>
            
            {/* Country */}
            <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
              <Form.Control
                type='country'
                placeholder='Enter Country'
                // the value of the email is the email on state
                value={country}
                required
                //what ever we type in
                onChange={(e) => setCountry(e.target.value)}
              ></Form.Control>
            </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>

            </Form>

         </FormContainer>
    )
}

export default ShippingScreen
