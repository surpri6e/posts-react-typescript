import React, { useEffect } from 'react'
import TodoCreateForm from '../components/Todos/TodoCreateForm'
import TodosList from '../components/Todos/TodosList'
import Modal from '../components/UI/modals/Modal'
import '../styles/TodosPage.css'
import { ITodo } from '../types/todosTypes'

const TodosPage: React.FC = () => {
    const [todos, setTodos] = React.useState<ITodo[]>(() => {
      return JSON.parse(localStorage.getItem('todos')!);
    });
    const [isFormCreate, setIsFormCreate] = React.useState<boolean>(false);

    const createTodo = (newTodo: ITodo) => {
      setTodos(() => {
        return [...todos, newTodo]
      });
      setIsFormCreate(false);
      // setTimeout(() => {
      //   newTodo.overdue = true;
      // }, parseInt(`${newTodo.time}0`));
    }

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    // Также можно сделать и с постами 

  return (
    <div className={'todos'}>
          <Modal isVisible={isFormCreate} setIsVisible={setIsFormCreate}>
              <TodoCreateForm create={createTodo}/>
          </Modal>
          <div className={'todos__header'}>
            <span onClick={() => setIsFormCreate(true)}>+</span>
          </div>
          <TodosList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodosPage