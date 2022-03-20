import React from 'react'
import './styles/Null.css'
import Header from './components/Header'
import { AuthContext } from './context/auth';
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing';

const App = () => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  //! Сделать добавление комментариев и изменения постов 

  React.useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  },[])

  return (
    <AuthContext.Provider value={{isAuth, isLoading, setIsAuth}}>
      <BrowserRouter>
        <Header/>
        <Routing/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App

