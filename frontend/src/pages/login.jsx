import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../compontes/General/header';
import { Button, Form } from 'react-bootstrap';
import Footer from '../compontes/General/footer';
import { login } from '../function/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier que tous les champs sont remplis
    if (!email || !password) {
      return;
    }

  
  try {
    const responseUser = await axios.post('http://localhost:5000/api/compareUser', {
      email: email,
      password: password,
    });
  
    if (responseUser.status === 200) {
      if (responseUser.data.role === 'user') {
        window.location.href = '/homeUser';
        login('user')
        return; 
      } else if (responseUser.data.role === 'admin') {
        window.location.href = '/homeAdmin';
        login('admin')
        return; 
      }
    }
  
    if (responseUser.status === 300) {
      setSuccessMessage(responseUser.data.message); 
      setPassword('');
      return;
    }
  } catch (error) {
    console.error(error);
    setSuccessMessage("Une erreur s'est produite lors de la vérification de l'utilisateur.");
  }
  




  setSuccessMessage('Mot de passe incorrect');
  setPassword('');
};



  return (
    <>
      <style>
        {`
        body {
          background-color: #FAF4DB;
        }
        `}
      </style>
      <Header />
      <div className="container" style={{ marginTop: '100px', width: '300px' }}>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <Button style={{ backgroundColor: '#ffc62a', color: 'black', borderColor: '#ffc62a', margin: '5px 0px' }} type="submit">
            Login
          </Button>
        </Form>

        {successMessage && <p>{successMessage}</p>}

        <p>
          You don't have an account? <Link to="/register" style={{ color: '#ffc62a' }}>Register</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
