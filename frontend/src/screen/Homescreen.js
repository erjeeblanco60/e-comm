  
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../component/ProductCompo.js'
import Message from '../component/message.js'
import Loader from '../component/loader.js'
import { listProducts } from '../action/productAction.js'


const HomeScreen = ({match}) => {

  // keyword match.params from router dom render props 
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    //pass the keyword to list product
    dispatch(listProducts(keyword))
  }, [dispatch,keyword])


  //use state to fetch data from backend
  // const [productsdb, setProducts] = useState([])
  // useEffect(()=> { 
  //  const fetchProduct = async()=> {
  //      const {data} = await axios.get('/api/products')

  //      setProducts(data)
  //  }
  //  fetchProduct()
  // },[])

  
  return (
    <> 
      <h1>Latest Products</h1>

      {loading ? (<Loader /> ) : error ? ( <Message variant='danger'> {error} </Message>) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
