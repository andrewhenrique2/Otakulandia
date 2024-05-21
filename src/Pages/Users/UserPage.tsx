import React, { useState, useContext } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import { Container, Form, Input, Button, Title } from './UserPageStyles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserPage = () => {
  const { user } = useContext(AuthContext);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem.');
      return;
    }
    try {
      await api.put('/auth/change-password', { password });
      toast.success('Senha alterada com sucesso!');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      toast.error('Erro ao alterar senha.');
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleAvatarUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!avatar) {
      toast.error('Selecione um arquivo de avatar.');
      return;
    }
    const formData = new FormData();
    formData.append('avatar', avatar);
    try {
      await api.post('/auth/upload-avatar', formData);
      toast.success('Avatar alterado com sucesso!');
      setAvatar(null);
    } catch (error) {
      toast.error('Erro ao alterar avatar.');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ToastContainer />
        <Title>Bem-vindo, {user?.username}</Title>
        <Form onSubmit={handlePasswordChange}>
          <h3>Alterar Senha</h3>
          <Input
            type="password"
            placeholder="Nova Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password" // Adicionado atributo autocomplete
          />
          <Input
            type="password"
            placeholder="Confirme a Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password" // Adicionado atributo autocomplete
          />
          <Button type="submit">Alterar Senha</Button>
        </Form>
        <Form onSubmit={handleAvatarUpload}>
          <h3>Alterar Avatar</h3>
          <Input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            required
          />
          <Button type="submit">Alterar Avatar</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default UserPage;
