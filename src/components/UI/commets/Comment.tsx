import React from 'react'
import { IComment } from '../../../types/commentsTypes'
import cl from './Comment.module.css'

interface CommentProps {
    comment: IComment;
}

const Comment: React.FC<CommentProps> = ({comment}) => {
  return (
    <div className={cl.comm}>
        <h5 className={cl.commTitle}>{comment.email}</h5>
        <p className={cl.commBody}>{comment.body}</p> 
    </div>
  )
}

export default Comment