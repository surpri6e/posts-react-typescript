import React, { CSSProperties } from 'react'
import cl from './Button.module.css';

interface ButtonProps {
    click?: () => void;
    _addStyle?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({children, click, _addStyle}) => {
  return (
    <button style={_addStyle} onClick={click} className={cl.btn}>
        {children}
    </button>
  )
}

export default Button