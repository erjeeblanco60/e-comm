import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../component/message'
import Loader from '../component/loader'
import FormContainer from '../component/FormContainer'
import { getUserDetails, userEditAction } from '../action/usersAction'
import {USER_EDIT_RESET} from '../constant/userConst'

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

    
  const userEdit = useSelector((state) => state.userEdit)
  const { loading: loadingEdit, error: errorLoading, success:successEdit } = userEdit


  useEffect(() => {
        if(successEdit) { 
            dispatch({type: USER_EDIT_RESET})
            history.push('/admin/userlist')
        } else { 
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
              } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
              }
        }
   
  }, [dispatch, userId, user,successEdit,history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userEditAction({ _id: userId, name, email, isAdmin }))
  }

  return (
    <>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingEdit && <Loader />}
        {errorLoading && <Message variant='danger'>{errorLoading}</Message>}
        {loading ? (
          <Loader />
        ) :  error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen