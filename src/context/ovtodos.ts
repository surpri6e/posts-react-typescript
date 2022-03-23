import React from 'react'
import { ITodo } from '../types/todosTypes';

interface IOvtodos {
    ovtodos: ITodo[];
    setOvtodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}


export const OvtodosContext = React.createContext<Partial<IOvtodos>>({});