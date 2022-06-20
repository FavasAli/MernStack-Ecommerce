import React, { useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Product from "../components/Product"
import { listProducts } from "../actions/productActions"
import { useParams } from "react-router-dom"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Paginate from "../components/Paginate"
import Meta from "../components/Meta"

const HomeScreen = () => {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const { keyword } = useParams()
  // const { pageNumber } = useParams() || 1

  const pageNumber = useParams().pageNumber || 1

  const productList = useSelector((state) => state.productList)

  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword))
    // async function fetchProducts() {
    //   const res = await axios.get("/api/products");
    //   setProducts(res.data)
    // }
    // fetchProducts();
  }, [dispatch, keyword])

  return (
    <>
      <Meta/>
      {keyword && <Link to='/' className='btn btn-dark'>Go Back</Link> }
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {/* <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          /> */}
        </>
      )}
    </>
  )
}

export default HomeScreen
