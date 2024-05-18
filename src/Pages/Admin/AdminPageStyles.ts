import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
