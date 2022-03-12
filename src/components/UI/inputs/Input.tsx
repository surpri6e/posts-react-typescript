import React from 'react'
import cl from './Input.module.css'

interface InputProps {
    type:  React.HTMLInputTypeAttribute;
    placeholder: string;
    _addStyle?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({type, placeholder, _addStyle}) => {
  return (
    <input className={cl.input} style={_addStyle} type={type} placeholder={placeholder}/>
  )
}

export default Input