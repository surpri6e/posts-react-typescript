import React from 'react'

interface IAuthContext {
    isAuth: boolean;
    isLoading: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<Partial<IAuthContext>>({});