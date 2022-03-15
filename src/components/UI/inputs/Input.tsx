import React from 'react'
import cl from './Input.module.css'

interface InputProps {
    type:  React.HTMLInputTypeAttribute;
    placeholder: string;
    _addStyle?: React.CSSProperties;
    value?: string;
    change?: (ev: any) => void;
}

const Input: React.FC<InputProps> = ({type, placeholder, _addStyle, value, change}) => {
  return (
    <input className={cl.input} style={_addStyle} value={value} type={type} placeholder={placeholder} onChange={change}/>
  )
}

export default Input