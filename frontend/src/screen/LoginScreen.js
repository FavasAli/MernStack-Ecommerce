// import React, { useState, useEffect } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { Form, Button, Col, Row } from 'react-bootstrap'
// import { useSelector, useDispatch } from 'react-redux'
// import Message from '../components/Message.js'
// import Loader from '../components/Loader.js'
// import { login } from '../actions/userActions.js'
// import FormContainer from '../components/FormContainer.js'


// const LoginScreen = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const dispatch = useDispatch()

//     const history = useNavigate()

//     // const { search } = useLocation()


//     const redirect = window.location.search ? Number(window.location.search.split("=")[1]) : '/';

//     const userLogin = useSelector(state => state.userLogin)


//     const { loading, error, userInfo } = userLogin

//     useEffect(() => {
//         if (userInfo) {
//             history(redirect)
//         }
//     }, [history, userInfo, redirect])



//     const submitHandler = (e) => {
//         e.preventDefault()
//         dispatch(login(email, password))
//     }

//     return (
//         <FormContainer>
//             <h1>Sign In</h1>
//             {error && <Message variant='danger'>{error}</Message>}
//             {loading && <Loader />}
//             <Form onSubmit={submitHandler}>
//                 <Form.Group controlId="email">
//                     <Form.Label>Email Address</Form.Label>
//                     <Form.Control
//                         type="email"
//                         placeholder="Enter Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     ></Form.Control>
//                 </Form.Group>

//                 <Form.Group controlId="password">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         placeholder="Enter Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     ></Form.Control>
//                 </Form.Group>

//                 <Button type="submit" variant="primary">
//                     Sign In
//                 </Button>
//             </Form>

//             <Row className='py-3'>
//                 <Col>
//                     New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>Register</Link>
//                 </Col>
//             </Row>
//         </FormContainer>
//     )
// }

// export default LoginScreen



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign in</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;