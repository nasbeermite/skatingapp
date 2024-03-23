import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }} onSubmit={handleFormSubmit}>
      <h2>Contact us</h2>

      <FloatingLabel controlId="name" label="Name" className="mb-4">
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="email" label="Email address" className="mb-4">
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="subject" label="Subject" className="mb-4">
        <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="message" label="Message" className="mb-4">
        <Form.Control as="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
      </FloatingLabel>
      <Button type='submit' className="mb-4" style={{width:'100%'}}>
        Send
      </Button>
    </Form>
  );
}
