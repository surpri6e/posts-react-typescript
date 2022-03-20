import React from 'react'
import { ITodo } from '../../types/todosTypes'
import Button from '../UI/buttons/Button';
import Input from '../UI/inputs/Input';
import Select from '../UI/selects/Select';
import './TodoCreateForm.css'

interface TodoCreateFormProps {
  create: (todo: ITodo) => void;
}

const TodoCreateForm: React.FC<TodoCreateFormProps> = ({create}) => {
  const [input, setInput] = React.useState<ITodo>({completed: false, id: 0, text: '', additional: '', time: 0, overdue: false});
  const createNewTodo = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    create({
      ...input, id: Date.now()
    })
    setInput({completed: false, id: 0, text: '', additional: '', time: 0, overdue: false});
  }

  return (
    <>
    <div style={{textAlign: 'end'}}>
      <Button _addStyle={{
        marginBottom: 10, minWidth: 20, marginLeft: 'auto'
      }} click={createNewTodo}>✓</Button>
    </div>
    <form className={'todocreateform'}>
      <Input 
        type={'text'} 
        placeholder={'Задача...'}
        value={input.text}
        change={(ev: React.ChangeEvent<HTMLInputElement>) => setInput({...input, text: ev.target.value})}
      />
      <Input 
        type={'text'} 
        placeholder={'Примечание...'}
        value={input.additional}
        change={(ev: React.ChangeEvent<HTMLInputElement>) => setInput({...input, additional: ev.target.value})}
      />
      <Select options={[
        {value: 'default', text: 'Default '},
        {value: '15', text: '15min'},
        {value: '25', text: '25min'},
        {value: '30', text: '30min'},
      ]} value={'times'} change={time => setInput({...input, time: parseInt(time)})}
      />
    </form>
    </>
  )
}

export default TodoCreateForm