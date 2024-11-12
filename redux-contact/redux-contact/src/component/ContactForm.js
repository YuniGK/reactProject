import React from 'react'
import { Button, Form } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" />
            </Form.Group>
       
            <Button variant="primary" type="submit">
                add
            </Button>
        </Form>        
    </div>
  )
}

export default ContactForm