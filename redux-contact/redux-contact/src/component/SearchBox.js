import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const SearchBox = () => {
  return (
    <div className='search-box'>
        <Row>
            <Col lg={10}><Form.Control type="text" placeholder="Enter Name" /></Col>
            <Col lg={2}><Button variant="primary">search</Button></Col>
        </Row>    
    </div>
  )
}

export default SearchBox