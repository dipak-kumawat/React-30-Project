import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Jumbotron = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Landing = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>WELCOME TO SUPPORT MANAGEMENT SYSTEM</h1>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/register">
          <Button>Create a account</Button>
        </Link>
      </Jumbotron>
    </Container>
  );
};

export default Landing;
