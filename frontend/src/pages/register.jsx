import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Header from '../compontes/General/header';
import Footer from '../compontes/General/footer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier que tous les champs sont remplis
    if (!name || !email || !password) {
      return;
    }

    try {
      // Vérifier si l'utilisateur existe déjà
      const response = await axios.get('http://localhost:5000/api/getAllUser');
      const users = response.data;
      let userExists = false;

      users.user.forEach((user) => {
        if (user.email === email) {
          userExists = true;
        }
      });

      if (userExists) {
        setSuccessMessage("L'utilisateur existe déjà.");
      } else {
        // Enregistrer l'utilisateur dans la base de données
        await axios.post('http://localhost:5000/api/addUser', { name, email, password });
        setSuccessMessage('Utilisateur enregistré avec succès !');
        window.location.href = '/homeUser';
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("Une erreur s'est produite lors de l'enregistrement de l'utilisateur.");
    }

    // Réinitialiser les champs après la soumission du formulaire
    setName('');
    setEmail('');
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
        <h2>Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <Button style={{ backgroundColor: '#ffc62a', color: 'black', borderColor: '#ffc62a', margin: '5px 0px' }} type="submit">
            Register
          </Button>
        </Form>

        {successMessage && <p>{successMessage}</p>}

        <p>
          Already have an account? <Link to="/login" style={{ color: '#ffc62a' }}>Login</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Register;
