import React from 'react'
import { IPost } from '../../types/postsTypes'
import Button from '../UI/buttons/Button';
import Input from '../UI/inputs/Input';
import './PostCreateForm.css'

interface PostCreateFormProps {
    create: (post: IPost) => void;
}

const PostCreateForm: React.FC<PostCreateFormProps> = ({create}) => {
    const [valPost, setValPost] = React.useState<IPost>({id: 0, title: '', body: ''});

    const addNewPost = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        const newPost = {...valPost, id: Date.now()}
        create(newPost);
        setValPost({id: 0, title: '', body: ''})
    }

  return (
    <form className='postcreateform'>
        <Input 
            value={valPost.title} 
            type={'text'} 
            placeholder={'Название поста'} 
            change={(ev: React.ChangeEvent<HTMLInputElement>) => setValPost({...valPost, title: ev.target.value})}/>
        <Input 
            value={valPost.body} 
            type={'text'} placeholder={'Тело поста'} 
            change={(ev: React.ChangeEvent<HTMLInputElement>) => setValPost({...valPost, body: ev.target.value})}/>
        <Button click={addNewPost}>Create</Button>
    </form>

  )
}

export default PostCreateForm