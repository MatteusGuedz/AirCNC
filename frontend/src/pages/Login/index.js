import React, {useState} from 'react';
import api from '../../services/api'
// import { Container } from './styles';

export default function Login({history}) {
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
  
    async function handleSubmit(event){
      event.preventDefault() // pnão quero que vc faça seu padrao
      
     const response = await  api.post('/sessions', {
        email:email,
        password:password
      })
      const { _id } = response.data;
      localStorage.setItem('user', _id)
      history.push('/dashboard')
      
    }
  
    function handleEmailChange(event){
      setEmail(event.target.value)
    }
  
    function handlePasswordChange(event){
      setPassword(event.target.value)
    }

  return (
    <>
     <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

<form onSubmit={handleSubmit}>
  <label htmlFor="email">E-MAIL *</label>
  <input 
    type="email" 
    id="email" 
    placeholder="Seu melhor email"
    value={email}
    onChange={handleEmailChange}/>

  <label htmlFor="password">PASSWORD *</label>
  <input 
    type="password" 
    id="password" 
    placeholder="Sua senha aqui"
    value={password}
    onChange={handlePasswordChange}/>
    
    <button className="btn" type="submit">Entrar</button>
</form>
    </>
  );
}
