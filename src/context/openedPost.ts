import React from 'react'

interface IOpenedPostContext {
    title: string;
    body: string;
}


export const OpenedPostContext = React.createContext<IOpenedPostContext>({title: '', body: ''});