import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import GlobalStyles from '../../GlobalStyles';
import { Container, FormWrapper, Input, Icon, InputField } from "./styles";
import { FaUser } from "react-icons/fa";
import coroa from '../../assets/coroa.png';
import { toast } from 'react-toastify';
import Header from '../../Components/Header'; // Corrigido o caminho do Header

const SignUp = () => {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }
    try {
      console.log('Sending signup request with:', formData);
      await signUp({
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      toast.success('Usuário cadastrado com sucesso!');
      console.log('User registered successfully');
      navigate('/'); // Redireciona para a home após o cadastro
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Erro ao cadastrar usuário!');
    }
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <FormWrapper>
            <img className='imgcoroa' src={coroa} alt="" />
            <h2>Crie sua conta</h2>
            <Input>
              <Icon>
                <FaUser fill={focusedInput === 'username' ? "#fb8304" : "#fff"} />
              </Icon>
              <InputField
                name="username"
                onFocus={() => setFocusedInput('username')}
                onBlur={() => setFocusedInput(null)}
                onChange={handleChange}
                type="text"
                placeholder='Nome de usuário'
                required
                autoComplete="username"
              />
            </Input>
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
                autoComplete="new-password"
              />
            </Input>
            <Input>
              <Icon>
                <FaUser fill={focusedInput === 'confirmPassword' ? "#fb8304" : "#fff"} />
              </Icon>
              <InputField
                name="confirmPassword"
                onFocus={() => setFocusedInput('confirmPassword')}
                onBlur={() => setFocusedInput(null)}
                onChange={handleChange}
                type="password"
                placeholder='Confirme sua senha'
                required
                autoComplete="new-password"
              />
            </Input>
            <p className='declaracao'>Ao se registrar, você aceita nossos <span>termos de uso</span> e a nossa <span>política de privacidade.</span></p>
            <button className='CadastrarButton' type="submit">
              <p>CADASTRAR</p>
            </button>
          </FormWrapper>
        </form>
      </Container>
    </>
  );
};

export default SignUp;
