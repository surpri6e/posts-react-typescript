import React from 'react'
import cl from './Button.module.css';

interface ButtonProps {
    click?: () => void; 
}

const Button: React.FC<ButtonProps> = ({children, click}) => {
  return (
    <button onClick={click} className={cl.btn}>
        {children}
    </button>
  )
}

export default Button