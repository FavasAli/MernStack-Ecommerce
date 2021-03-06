import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import ProfileScreen from './screen/ProfileScreen'
import ShippingScreen from './screen/ShippingScreen'
import PaymentScreen from './screen/PaymentScreen'
import PlaceOrderScreen from './screen/PlaceOrderScreen'
import OrderScreen from './screen/OrderScreen'
import UserListScreen from './screen/UserListScreen'
import UserEditScreen from './screen/UserEditScreen'
import ProductListScreen from './screen/ProductListScreen'
import ProductEditScreen from './screen/ProductEditScreen'
import OrderListScreen from './screen/OrderListScreen'

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/order/:id' element={<OrderScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/payment' element={<PaymentScreen/>} />
              <Route path='/placeorder' element={<PlaceOrderScreen/>} />
              {/* <Route path='/login/shipping' element={<ShippingScreen />} /> */}
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/admin/userlist' element={<UserListScreen />} />
              <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
              <Route path='/admin/productlist' element={<ProductListScreen />} />
              <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
              <Route path='/admin/orderlist' element={<OrderListScreen />} />
              <Route path='/' element={<HomeScreen />}  />
              <Route path='/search/:keyword' element={<HomeScreen />}  />
              <Route path='/page/:pageNumber' element={<HomeScreen />} exact />
              <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
