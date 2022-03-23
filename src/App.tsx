import React from 'react'
import './styles/Null.css'
import Header from './components/Header'
import { AuthContext } from './context/auth';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';
import { OvtodosContext } from './context/ovtodos';
import { ITodo } from './types/todosTypes';

const App = () => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [ovtodos, setOvtodos] = React.useState<ITodo[]>(() => {
    return JSON.parse(localStorage.getItem('ovtodos')!) || [];
  });

  React.useEffect(() => {
    localStorage.setItem('ovtodos', JSON.stringify(ovtodos));
  }, [ovtodos])

  //! Сделать добавление комментариев и изменения постов 

  React.useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  },[])

  return (
    <AuthContext.Provider value={{isAuth, isLoading, setIsAuth}}>
      <OvtodosContext.Provider value={{ovtodos, setOvtodos}}>
        <BrowserRouter>
          <Header/>
          <Routing/>
        </BrowserRouter>
      </OvtodosContext.Provider>
    </AuthContext.Provider>
  )
}

export default App

