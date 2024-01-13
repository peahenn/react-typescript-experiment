import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Access the values using emailRef.current.value, passwordRef.current.value
    // Add your Sign In form submission logic here
  };

  return (
    <div className="signin-container">
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Login to your account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} placeholder='Enter Email' required />
            </Form.Group>

            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} placeholder='Enter Password' required />
            </Form.Group>

            {/* <Form.Group className='text-center' id='forgot-password'>
              <a href='/forgot-password'>Forgot Password?</a>
            </Form.Group> */}

            <Button className='w-100' type='submit'>
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='text-center mt-2 signin-link'>
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
}
