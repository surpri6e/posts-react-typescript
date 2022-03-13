import React from 'react'
import { IPost } from '../../types/postsTypes'
import Mistake from '../UI/mistakes/Mistake';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PostItem from './PostItem';
import './PostsList.css'

interface PostsListProps {
    posts: IPost[];
    category: string;
    remove: (item: IPost) => void;
}

const PostsList: React.FC<PostsListProps> = ({posts, category, remove}) => {
    if(!posts.length) {
        return <Mistake mistake={'Постов не найдено'}/>
    }

  return (
    <div className={'postlist'}>
    <h1 className={'postlist__title'}>{category}</h1>
        <TransitionGroup className={'post__animation'}>
            {posts.map(post => 
                <CSSTransition key={post.id} timeout={500} classNames='post__transition'>
                    <PostItem remove={remove} post={post} title={post.title} body={post.body}/>
                </CSSTransition>
            )}
        </TransitionGroup>
    </div>
  )
}

export default PostsList