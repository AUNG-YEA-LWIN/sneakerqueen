import React, { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/AuthContext'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/sneakerqueen');
        } catch (err) {
            setError(err.message);
        }

    }

    return (
        <>
            <Container className='d-flex align-items-center justify-content-center mt-5' styled={{ minHeight: '100vh' }}>
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Log In</h2>
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
                                        placeholder="Email Password"
                                        onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Button className='w-100 h-100 mt-4' type='submit'>Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        Are you new user? <Link to='/singup' >Sign Up</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Login;