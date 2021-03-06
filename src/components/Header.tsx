import React from 'react'
import '../styles/Header.css';
import { publicRoutes, privateRoutes } from '../routes/routes';
import { AuthContext } from '../context/auth';
import { Link } from 'react-router-dom';
import Button from './UI/buttons/Button';
import { OvtodosContext } from '../context/ovtodos';

const Header: React.FC = () => {
    const { isAuth, setIsAuth } = React.useContext(AuthContext);
    const { setOvtodos} = React.useContext(OvtodosContext);

    const logout = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        setIsAuth!(false);
        localStorage.removeItem('auth');
        localStorage.removeItem('openedPost');
        setOvtodos!([]);
    }


  return (
    <div className={'header'}>
      {
        isAuth
          ?
            privateRoutes.map(route => 
              route.inHeader
                ?
                  <Link style={{marginLeft: 10}} key={route.k} to={route.path}>{route.inHeader}</Link>
                :
                  <div key={route.k}></div>
            )
          :
            publicRoutes.map(route => 
              route.inHeader
                ?
                  <Link style={{marginLeft: 10}} key={route.k} to={route.path}>{route.inHeader}</Link>
                :
                  <div key={route.k}></div>
            )
      }
      {
        isAuth
          ?
            <Button click={logout}>Выйти</Button>
          :
            <></>
      }
    </div>
  )
}

export default Header