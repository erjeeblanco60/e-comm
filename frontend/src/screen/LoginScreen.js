import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../component/message.js'
import Loader from '../component/loader.js'
import {login} from '../action/usersAction.js'
import FormContainer from '../component/FormContainer.js'

const LoginScreen = ({location, history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const dispatch = useDispatch()
    

    //select userLogin from state
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
  

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
      //dispatch loginaction
      dispatch(login(email, password))
    }

    return (
        <FormContainer>
          <h1>Sign In</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
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
    
            <Button type='submit' variant='primary'>
              Sign In
            </Button>
          </Form>
    
          <Row className='py-3'>
            <Col>
              New Customer?{' '}
              {/* //redirect to register if false */}
              <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                Register
              </Link>
            </Col>
          </Row>
        </FormContainer>
      )
    }
    
    export  {LoginScreen}
