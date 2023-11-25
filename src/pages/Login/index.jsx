import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Card, CardContent } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para lidar com o login
    console.log(`Username: ${username} \n Password: ${password}`);
  };

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para lidar com o registro
    console.log(`Register Username: ${registerUsername} \n Register Password: ${registerPassword}`);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <h2>Login</h2>
          <FormControl fullWidth>
            <InputLabel htmlFor="username">Nome de usuário</InputLabel>
            <Input id="username" aria-describedby="username-helper-text" value={username} onChange={e => setUsername(e.target.value)} />
            <FormHelperText id="username-helper-text">Insira seu nome de usuário.</FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <Input id="password" aria-describedby="password-helper-text" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <FormHelperText id="password-helper-text">Insira sua senha.</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleLogin}>Entrar</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2>Registro</h2>
          <FormControl fullWidth>
            <InputLabel htmlFor="register-username">Nome de usuário</InputLabel>
            <Input id="register-username" aria-describedby="register-username-helper-text" value={registerUsername} onChange={e => setRegisterUsername(e.target.value)} />
            <FormHelperText id="register-username-helper-text">Insira um nome de usuário para registro.</FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="register-password">Senha</InputLabel>
            <Input id="register-password" aria-describedby="register-password-helper-text" type="password" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} />
            <FormHelperText id="register-password-helper-text">Insira uma senha para registro.</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleRegister}>Registrar</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
