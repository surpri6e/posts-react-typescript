import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context/auth'
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import { privateRoutes, publicRoutes } from '../routes/routes';
import Loader from './UI/loaders/Loader';

const Routing: React.FC = () => {
    const {isAuth, isLoading} = React.useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {
                    privateRoutes.map(route => 
                        <Route key={route.path} path={route.path} element={<route.elem/>}/>
                    )
                }
                <Route path={'*'} element={<MainPage/>}/>
            </Routes>
            :
            <Routes>
                {
                    publicRoutes.map(route => 
                        <Route key={route.path} path={route.path} element={<route.elem/>}/>
                    )
                }
                <Route path={'*'} element={<LoginPage/>}/>
            </Routes>
    )
}

export default Routing