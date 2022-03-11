import React, { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/AuthContext'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }

  }

  return (
    <React.Fragment>
      <Container className='d-flex align-items-center justify-content-center mt-5' styled={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Sign Up</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type='email'
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button className='w-100 h-100 mt-4' type='submit'>Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/login'>Log In</Link>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Signup;
