import React from 'react'
import { IPost } from '../../types/postsTypes';
import Loader from '../UI/loaders/Loader';

interface PostTitleProps {
    cl: string;
    loading?: boolean;
    post: IPost;
}

const PostTitle: React.FC<PostTitleProps> = ({cl, loading, post}) => {
  return (
    loading 
        ?
          <Loader/>
        :
          <div className={cl}>{post.id}. {post.title}</div>
  )
}

export default PostTitle