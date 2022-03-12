import React, { CSSProperties } from 'react'
import cl from './Loader.module.css'

interface LoaderProps {
  _addStyle?: CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({_addStyle}) => {
  return (
    <div className={cl.loader} style={_addStyle}></div>
  )
}

export default Loader