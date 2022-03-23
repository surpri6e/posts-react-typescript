import React from 'react'
import { OvtodosContext } from '../../context/ovtodos';
import { ITodo } from '../../types/todosTypes';
import './TodoItem.css'

interface TodoItemProps {
  text: string;
  time: number;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  currentTodo: ITodo;
  addon: string;
}

const TodoItem: React.FC<TodoItemProps> = ({text, time, todos, setTodos, currentTodo, addon}) => {
  
  const [completed, setCompleted] = React.useState<boolean>(false);

  const deleteTodo = () => {
    setCompleted(true);
    setTodos(todos.filter(p => p.id !== currentTodo.id));

    return;
  }

  const {ovtodos, setOvtodos} = React.useContext(OvtodosContext)

  const [delay, setDelay] = React.useState<boolean>(() => {
    return false;
  });

  React.useEffect(() => {
  if(time) {
    let timer = setTimeout(() => {
      setDelay(true);
      setOvtodos!([...ovtodos!, currentTodo]);
      setTodos(todos.filter(p => p.id !== currentTodo.id));
      clearTimeout(timer);
      // currentTodo.overdue = true;
      // localStorage.setItem('todos', JSON.stringify(todos))!;
    }, parseInt(`${time}00`));
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay])


  return (
    <div className={'todo-item'} data-title={addon ? addon : 'Примечаний нет'} style={{background: currentTodo.overdue || delay ? '#ff726f' : 'transparent'}}>
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
        {
          time
            ?
              `${time} мин.`
            :
              `Неог.`
        }
      </div>
    </div>
  )
}

export default TodoItem