import React from 'react'
import { ITodo } from '../../types/todosTypes';
import './TodoItem.css'

interface TodoItemProps {
  text: string;
  time: number;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  currentTodo: ITodo;
  addon: string;
  overdue: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({text, time, todos, setTodos, currentTodo, addon, overdue}) => {
  
  const [completed, setCompleted] = React.useState<boolean>(false);

  const deleteTodo = () => {
    if(window.confirm('Точно сделал?')) {
      setCompleted(true);
      setTodos(todos.filter(p => p.id !== currentTodo.id));
    }

    return;
  }

  const [delay, setDelay] = React.useState<boolean>(false);
  setTimeout(() => {
    setDelay(true);
  }, parseInt(`${time}000`));

  //в локал сторадж, если выполнен, класть уже с выполненым значением, чтобы 
  //при захле сразу же отображать как просроченую при помощи state через пропсы

  return (
    <div className={'todo-item'} data-title={addon ? addon : 'Примечаний нет'} style={{background: delay ? '#ff726f' : 'transparent'}}>
      <div className={'todo-item__completed'}>
        <span onClick={deleteTodo}>
          {
            completed 
              ?
              <span className={'todo-item__completed-completed'}></span>
              :
              <></>
          }
        </span>
      </div>
      <div className={'todo-item__text'}>
        {text}
      </div>
      <div className={'todo-item__time'}>
        {time} мин.
      </div>
    </div>
  )
}

export default TodoItem