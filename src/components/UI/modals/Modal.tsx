import React from 'react'
import cl from './Modal.module.css'

interface ModalProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({children, isVisible, setIsVisible}) => {

    const classes = [cl.modalBlock];
    if(isVisible) {
        classes.push(cl.active);
    }

  return (
    <div className={classes.join(' ')} onClick={(ev: React.MouseEvent<HTMLDivElement>) => setIsVisible(false)}>
        <div className={cl.modalContent} onClick={(ev: React.MouseEvent<HTMLDivElement>) => ev.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal;