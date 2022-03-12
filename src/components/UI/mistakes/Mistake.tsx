import React, { CSSProperties } from 'react'
import cl from './Mistake.module.css'

interface MistakeProps {
    mistake: string;
    _addStyle?: CSSProperties;
}

const Mistake: React.FC<MistakeProps> = ({mistake, _addStyle}) => {
  return (
    <div style={_addStyle} className={cl.mistake}>
        We were able to find the error! Error - <span>{mistake}</span>.
    </div>
  )
}

export default Mistake