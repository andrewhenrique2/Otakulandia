// src/Pages/SignIn/index.tsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../Components/Header';
import GlobalStyles from '../../GlobalStyles';
import { Container, Form, Input, Icon, InputField } from "./styles";
import { FaUser } from "react-icons/fa";
import coroa from '../../assets/coroa.png';

function SignIn() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { signIn } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(formData);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <img className='imgcoroa' src={coroa} alt="" />
          <h2>Login</h2>
          <Input>
            <Icon>
              <FaUser fill={focusedInput === 'email' ? "#fb8304" : "#fff"} />
            </Icon>
            <InputField
              name="email"
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
              onChange={handleChange}
              type="email"
              placeholder='E-mail'
              required
              autoComplete="email"
            />
          </Input>
          <Input>
            <Icon>
              <FaUser fill={focusedInput === 'password' ? "#fb8304" : "#fff"} />
            </Icon>
            <InputField
              name="password"
              onFocus={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput(null)}
              onChange={handleChange}
              type="password"
              placeholder='Senha'
              required
              autoComplete="current-password"
            />
          </Input>
          <p className='declaracao'>Ao se registrar, você aceita nossos <span>termos de uso</span>  e a nossa <span> política de privacidade.</span></p>
          <button className='CadastrarButton' type="submit">
            <p>LOGIN</p>
          </button>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;
