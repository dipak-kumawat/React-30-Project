import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(email, password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link to="/showticket">
        <Button type="submit">Login</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
