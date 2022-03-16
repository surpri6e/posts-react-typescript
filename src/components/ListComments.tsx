import React, { CSSProperties } from 'react'
import { IComment } from '../types/commentsTypes';
import List from './List';
import Comment from './UI/commets/Comment';
import Loader from './UI/loaders/Loader';

interface ListCommentsProps {
    isLoading: boolean;
    comments: IComment[];
    _addStyle?: CSSProperties;
}

const ListComments: React.FC<ListCommentsProps> = ({comments, isLoading, _addStyle}) => {
  return (
    <div style={_addStyle}>
        {
            isLoading
                ?
                    <Loader/>
                :
                    <List items={comments} renderItem={(comm) => <Comment key={comm.email} comment={comm}/>}/>
        }
    </div>
  )
}

export default ListComments