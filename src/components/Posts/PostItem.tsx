import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../types/postsTypes';
import Button from '../UI/buttons/Button';
import './PostItem.css';

interface PostItemProps {
    title: string;
    body: string;
    post: IPost;
    remove: (post: IPost) => void;
}
// <OpenedPostContext.Provider value={{title, body}}>

const PostItem: React.FC<PostItemProps> = ({title, body, post, remove}) => {
    const router = useNavigate();

    const openedPost = {
        title,
        body
    }

  return (
        <div className='post'>
            <div className='post__content'>
                <strong>{title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className='post__btns'>
                <Button click={() => {
                    localStorage.setItem('openedPost', JSON.stringify(openedPost))
                    return router(`/posts/${post.id}`)
                }}>Open</Button>
                <Button click={() => remove(post)}>Delete</Button>
            </div>
        </div>
  )
}

export default PostItem