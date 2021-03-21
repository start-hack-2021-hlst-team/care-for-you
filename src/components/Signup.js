import React, { useRef, useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
// import { signup } from '../services/auth';

export default function Signup () {
  
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/slide1")
      } catch {
        setError("Failed to create an account")
      }
  
      setLoading(false)

    }


    return (
      <div className='sign-up'>
        <div className='sign-up-container'>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          
          <Form.Group>
            <Form.Label htmlFor='email'></Form.Label>
            <Form.Control
              className='btn-email' 
              type='email'
              placeholder=' Email'
              ref={emailRef} required
            />
          </Form.Group> 

          <Form.Group>
            <Form.Label htmlFor='password'></Form.Label>
            <Form.Control
              className='btn-email'
              type='password'
              name='password'
              id='password'
              placeholder=' Enter your password'
              ref={passwordRef} required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='password'></Form.Label>
            <Form.Control
              className='btn-email'
              type='password'
              name='password'
              id='password'
              placeholder=' Re-Enter your password'
              ref={passwordConfirmRef} required
            />
          </Form.Group>

          <Button disabled={loading} className='btn-submit' type='submit'>Signup</Button>
        </Form>
        </div>
      </div> 
    )
  }


