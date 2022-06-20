import React, { useState } from "react"
import { Form, Button, Row,Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const SearchBox = () => {
  const history = useNavigate()
  const [keyword, setKeyword] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history(`/search/${keyword}`)
    } else {
      history("/")
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
        <Col>
          {" "}
          <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products....'
            className='mr-sm-2 ml-sm-5'
          ></Form.Control>
        </Col>
        <Col>
          <Button type='submit' variant='outline-success' className='p-2'>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
