import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalstorage from '../hooks/useLocalstorage';

import { signIn } from '../services/firebase';

export function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [userId, setUserId] = useLocalstorage('userId', '');

  function handleLogin(e: FormEvent) {
    //não fazer o comportamento padrão
    e.preventDefault();
    signIn(usuario, senha)
      .then((credential) => {
        alert('Bem-vindo!' + credential.user.uid);
        setUserId(credential.user.uid);
      })
      .catch((error) => {
        console.log(error);
        alert('Usuário ou senha incorreto!');
      });
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input onChange={(e) => setUsuario(e.target.value)} value={usuario} />
        </div>
        <div>
          <label>Senha:</label>
          <input
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            type="password"
          />
        </div>
        <div>
          <button type="submit">Acessar</button>
        </div>
        <div>
          Ainda não tem conta?
          <Link to="/criar-conta">Que tal criar uma.</Link>
        </div>
      </form>
    </>
  );
}
