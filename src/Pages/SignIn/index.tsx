import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../Components/Header';
import GlobalStyles from '../../GlobalStyles';
import { Container, FormWrapper, Input, Icon, InputField } from "./styles";
import { FaUser } from "react-icons/fa";
import coroa from '../../assets/coroa.png';
import { toast } from 'react-toastify';

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
    try {
      await signIn(formData);
      toast.success("Login efetuado com sucesso!");
    } catch (error) {
      toast.error("Erro ao efetuar login. Verifique suas credenciais.");
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
            <p className='declaracao'>Ao se registrar, você aceita nossos <span>termos de uso</span>  e a nossa <span>política de privacidade.</span></p>
            <button className='CadastrarButton' type="submit">
              <p>LOGIN</p>
            </button>
          </FormWrapper>
        </form>
      </Container>
    </>
  );
}

export default SignIn;
