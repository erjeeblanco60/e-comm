
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../component/RatingCompo.js'
import Message from '../component/message.js'
import Loader from '../component/loader.js'
import {productReviewAction, listProductDetails } from '../action/productAction.js'
import {PRODUCT_REVIEW_RESET } from '../constant/productConst'
const ProductScreen = ({history, match }) => {

  // form control value
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState()


  const dispatch = useDispatch()

  //selector to grab the state data to distribute to component
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  //
  const productReview = useSelector((state) => state.productReview)
  const { error:errorReview, success} = productReview

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo} = userLogin

  useEffect(() => {
      if(success) { 
        alert('Review Submitted')
        setRating(0)
        setComment('')
        dispatch({type: PRODUCT_REVIEW_RESET})
      }

    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match,success])

  
  //add cart button 
  const addToCartHandler = () => { 

      //Push query string
      history.push(`/cart/${match.params.id}?qty=${qty}`)

  }

  const submitHandler = (e) => { 
    e.preventDefault()
    dispatch(productReviewAction(match.params.id,{
      comment,
      rating
    }))
  }

  return (
    <>
    <h1>Product Details</h1>

      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>

                            {/* if countstock is greater than 0, else out of stock */}
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>


                           {/* if countStock is grater than 0 , then show the listgroup item */}
                {product.countInStock > 0 && (
                <ListGroup.Item> 
                  <Row> 
                    <Col> QTY </Col>
                        <Col> 
{/*                           
                          Create select form | value is qty which is part of state | onchage is the action which 
                          will pass a function as an action | function setQTY which is part of state whatever the target value selected */}
                          <Form.Control as='select' value={qty} onChange={(e) => 
                              setQty(e.target.value)}>
                              
                                  {/* Show an spread array of quantity as an option which lives in product.countstock */}
                               { [...Array(product.countInStock).keys()].map (x => (

                                //  Show an option and the value is the x above + 1 to start qty with 1
                                <option key={x} value={x + 1}> 
                                {x+1}
                                </option>
                              ))}
                             </Form.Control> 
                        </Col>
                  </Row>
                </ListGroup.Item>)}

                <ListGroup.Item>
                  <Button 
                    onClick={addToCartHandler}
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
          <Row> 
          <Col md={6}>
              <h2> Reviews</h2>
                  {product.reviews.length === 0 && <Message>No Reviews</Message>}

                  {/* Loop the reviews to show */}
                  <ListGroup variant='flush'> 
                      {product.reviews.map(review => (
                        <ListGroup.Item key={review._id}> 
                          <strong>{review.name} </strong>    
                          <Rating value={review.rating} />
                            <p>{review.createdAt.substring(0,10)} </p>
                            <p>{review.comment} </p>
                            </ListGroup.Item>
                      ))}

                        <ListGroup.Item> 
                          <h2>Write a Customer Review </h2>
                          {errorReview && <Message variant='danger'> {errorReview} </Message>}
                          {/* if userLogin is   trueee show the form */}
                          {userInfo ? (     
                          
                            <Form onSubmit={submitHandler}> 
                              <Form.Group controlId='rating'> 
                                <Form.Label> Rating</Form.Label>
                                <Form.Control as='select' value={rating} onChange={(e)=> setRating(e.target.value)}> 
                                  <option value=''>Select.... </option>
                                  <option value='1'>1 - Poor </option>
                                  <option value='2'>2 - Fair </option>
                                  <option value='3'>3 - Good </option>
                                  <option value='4'>4- Very Good </option>
                                  <option value='5'>5 - Excellent </option>
                                </Form.Control>
                                </Form.Group>
                            <Form.Group controlId='comment'> 
                              <Form.Label> Comment </Form.Label>
                              <Form.Control as='textarea' row='3' value={comment} onChange={(e)=> setComment(e.target.value)}> 
                              </Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary'> 
                            Submit
                            </Button>
                            </Form>
                          // else please sign in
                          ) : <Message> Please <Link to='/login'>sign in</Link></Message> }
                          </ListGroup.Item>

                  </ListGroup>
              </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default ProductScreen