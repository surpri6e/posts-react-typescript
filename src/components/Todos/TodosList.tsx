import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ITodo } from '../../types/todosTypes';
import Mistake from '../UI/mistakes/Mistake';
import TodoItem from './TodoItem';
import './TodosList.css'

interface TodosListProps {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodosList: React.FC<TodosListProps> = ({todos, setTodos}) => {
  if(!todos.length) {
    return <Mistake mistake={'Нет дел что-ли?'}/>
  }

  return (
        <TransitionGroup className={'todos__list'}>
            {todos.map((todo) => {
                return (
                  <CSSTransition key={todo.id} timeout={500} classNames='todo_anim'>
                      <TodoItem
                        todos={todos}
                        setTodos={setTodos}
                        currentTodo={todo}
                        text={todo.text}
                        time={todo.time}
                        addon={todo.additional}
                        overdue={todo.overdue}
                      />
                  </CSSTransition>
                )
            })}
        </TransitionGroup>
  )
}

export default TodosList