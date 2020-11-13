import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../component/message.js'
import Loader from '../component/loader.js'
import {register} from '../action/usersAction.js'
import FormContainer from '../component/FormContainer.js'

const RegisterScreen = ({location, history}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [message, setMessage] = useState(null)


    const dispatch = useDispatch()
    

    //select userLogin from state
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister
  
    //

    //redirect user if already login or after login                    
    const redirect = location.search ? location.search.split('=')[1] : '/'
  

    //if user exist please redirect
    useEffect(() => {
      if (userInfo) {
        history.push(redirect)
      }
    }, [history, userInfo, redirect])
  
    //submit handler 
    const submitHandler = (e) => {
      e.preventDefault()

      if(password !== confirmPassword) { 
        setMessage('Password do not match')
      } else { 
        //dispatch 
         dispatch(register(name,email, password))
      }
     
    }

    return (
        <FormContainer>
          <h1>Sign Up</h1>
          {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}


          <Form onSubmit={submitHandler}>


        {/* Name */}
          <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter Name'
                // the value of the email is the email on state
                value={name}
                //what ever we type in
                onChange={(e) => setName(e.target.value)}

              ></Form.Control>
            </Form.Group>


            {/* Email */}
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                // the value of the email is the email on state
                value={email}
                //what ever we type in
                onChange={(e) => setEmail(e.target.value)}

              ></Form.Control>
            </Form.Group>
    

            {/* Password */}
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                //the value of password is the password on state
                value={password}
                //what ever we type in
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>


            
            {/* Password */}
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                //the value of password is the password on state
                value={confirmPassword}
                //what ever we type in
                onChange={(e) => setconfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
    
            <Button type='submit' variant='primary'>
              Register
            </Button>
          </Form>
    
          <Row className='py-3'>
            <Col>
              Have an Account??{' '}
              {/* //redirect to register if false */}
              <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                Login
              </Link>
            </Col>
          </Row>
        </FormContainer>
      )
    }
    
    export  default RegisterScreen
