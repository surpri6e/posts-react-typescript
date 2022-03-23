import React from 'react'
import { ITodo } from '../../types/todosTypes'
import './OvtodosItem.css'

interface OvtodosItemProps {
    todo: ITodo;
}

const OvtodosItem: React.FC<OvtodosItemProps> = ({todo}) => {
  return (
    <div className={'ovtodo-item'} data-title={todo.additional ? todo.additional : 'Примечаний нет'} style={{background: '#ff726f'}}>
      <div className={'ovtodo-item__text'}>
        {todo.text}
      </div>
      <div className={'ovtodo-item__time'}>
        {
          todo.time
            ?
              `${todo.time} мин.`
            :
              `Неог.`
        }
      </div>
    </div>
  )
}



export default OvtodosItem