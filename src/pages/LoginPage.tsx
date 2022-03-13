import React from 'react'
import Button from '../components/UI/buttons/Button';
import Input from '../components/UI/inputs/Input';
import { AuthContext } from '../context/auth'

const LoginPage: React.FC = () => {
  const { setIsAuth } = React.useContext(AuthContext);

  const login = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setIsAuth!(true);
    localStorage.setItem('auth', 'true');
  }

  const marginTop: string = '15px';
    
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 200}}>
      <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={login}>
        <Input _addStyle={{marginTop}} type={'text'} placeholder={'Логин'}/>
        <Input _addStyle={{marginTop}} type={'password'} placeholder={'Пароль'}/>
        <Button _addStyle={{marginTop}}>Залогиниться</Button>
      </form>
    </div>
  )
}

export default LoginPage