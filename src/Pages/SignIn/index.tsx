import React, { useState } from 'react';
import Header from '../../Components/Header';
import GlobalStyles from '../../GlobalStyles';
import { Container, Form, Input, Icon, InputField } from "./styles";
import { FaUser } from "react-icons/fa";
import coroa from '../../assets/coroa.png'

function SignIn() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Form>
          <img className='imgcoroa' src={coroa} alt="" />
          <h2>Login</h2>
      

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

        

          <p className='declaracao'>Ao se registrar, você aceita nossos <span>termos de uso</span>  e a nossa <span> política de privacidade.</span></p>
            <button className='CadastrarButton' >
                <p>CADASTRAR</p>
            </button>
          
        </Form>

      </Container>
    </>
  );
}

export default SignIn;
