import React, { useEffect } from 'react'
import List from '../components/List'
import OvtodosItem from '../components/Todos/OvtodosItem'
import TodoCreateForm from '../components/Todos/TodoCreateForm'
import TodosList from '../components/Todos/TodosList'
import Button from '../components/UI/buttons/Button'
import Modal from '../components/UI/modals/Modal'
import { OvtodosContext } from '../context/ovtodos'
import '../styles/TodosPage.css'
import { ITodo } from '../types/todosTypes'

const TodosPage: React.FC = () => {
    const [todos, setTodos] = React.useState<ITodo[]>(() => {
      return JSON.parse(localStorage.getItem('todos')!) || [];
    });
    const [isFormCreate, setIsFormCreate] = React.useState<boolean>(false);
    const [isOverdued, setIsOverdued] = React.useState<boolean>(false);

    const createTodo = (newTodo: ITodo) => {
      setTodos(() => {
        return [...todos, newTodo]
      });
      setIsFormCreate(false);
    }

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const { ovtodos } = React.useContext(OvtodosContext);

  return (
    <div className={'todos'}>
          <Modal isVisible={isFormCreate} setIsVisible={setIsFormCreate}>
              <TodoCreateForm create={createTodo}/>
          </Modal>
          <div className={'todos__header'}>
            <Button click={() => setIsOverdued(prev => {
              return !prev;
            })}>{isOverdued ? 'Обратно' : 'Просроченные'}</Button>
            {
              !isOverdued
              ?
                <>
                  <Button click={() => {
                    setTodos([]);
                    localStorage.setItem('todos', JSON.stringify([]));
                  }}>Удалить все</Button>
                  <span onClick={() => setIsFormCreate(true)}>+</span>
                </>
              :
                <></>
            }
          </div>
          {
            !isOverdued
            ?
              <TodosList todos={todos} setTodos={setTodos}/>
            :
              <List items={ovtodos!} renderItem={(todo) => <OvtodosItem todo={todo} key={todo.id}/>}/>
          }
    </div>
  )
}

export default TodosPage