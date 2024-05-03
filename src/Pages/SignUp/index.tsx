import React, { useState } from 'react';
import Header from '../../Components/Header';
import GlobalStyles from '../../GlobalStyles';
import { Container, Form, Input, Icon, InputField } from "./styles";
import { FaUser } from "react-icons/fa";
import coroa from '../../assets/coroa.png'

function SignUp() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Form>
          <img className='imgcoroa' src={coroa} alt="" />
          <h2>Crie sua conta</h2>
          <Input>
            <Icon>
              <FaUser fill={focusedInput === 'username' ? "#fb8304" : "#fff"} />
            </Icon>
            <InputField
              onFocus={() => setFocusedInput('username')}
              onBlur={() => setFocusedInput(null)}
              type="text"
              placeholder='Nome de usuário' />
          </Input>

          <Input>
            <Icon>
              <FaUser fill={focusedInput === 'email' ? "#fb8304" : "#fff"} />
            </Icon>
            <InputField
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
              type="text"
              placeholder='E-mail' />
          </Input>

          <Input>
            <Icon>
              <FaUser fill={focusedInput === 'password' ? "#fb8304" : "#fff"} />
            </Icon>
            <InputField
              onFocus={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput(null)}
              type="password"
              placeholder='Senha' />
          </Input>

          <Input>
            <Icon>
              <FaUser fill={focusedInput === 'confirmPassword' ? "#fb8304" : "#fff"} />
            </Icon>
            <InputField
              onFocus={() => setFocusedInput('confirmPassword')}
              onBlur={() => setFocusedInput(null)}
              type="password"
              placeholder='Confirme sua senha' />
          </Input>

          <p className='declaracao'>Ao se registrar, você aceita nossos <span>termos de uso</span>  e a nossa <span> política de privacidade.</span></p>
            <button className='CadastrarButton' >
                <p>CADASTRAR</p>
            </button>
          
        </Form>

      </Container>
    </>
  );
}

export default SignUp;
