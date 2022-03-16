import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import ListComments from '../components/ListComments';
import PostTitle from '../components/Posts/PostTitle';
import { useFetching } from '../hooks/useFetching';
import '../styles/PostPage.css'
import { IComment } from '../types/commentsTypes';
import { IPost } from '../types/postsTypes';

const PostPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState<IPost>({id: parseInt(id!), title: '', body: ''});
  const [comms, setComms] = React.useState<IComment[]>([{id: parseInt(id!), body: '', name: '', email: ''}]);

  const {serverRequest, isLoading, err} = useFetching(async () => {
    const res = await PostService.getById(`${id}`);
    setPost(res.data);
  })

  const {serverRequest: getComms, isLoading: isCommsLoading, err: errComms} = useFetching(async () => {
    const res = await PostService.getCommets(`${id}`);
    setComms(res.data);
  })

  const [openedPost, setOpenedPost] = React.useState<IPost>({id: parseInt(id!), title: '', body: ''});

  const getOpenedPost = () => {
    setOpenedPost({
      ...openedPost,
      ...JSON.parse(localStorage.getItem('openedPost')!)
    })

    localStorage.removeItem('openedPost');
  }

  console.log(openedPost)

  React.useEffect(() => {
    serverRequest();
    getComms();
    getOpenedPost();
    // eslint-disable-next-line
  }, [])

  return (
    <div className={'postpage'}>
      {
        (err === '' || errComms === '') && (parseInt(id!) < 1600000)
          ?
            <div>
              <PostTitle cl={'post__title'} loading={isLoading} post={post}/>
              <div className={'post__text'}>{post.body}</div>
              <div className={'post__body'}>
                <h1 className={'post__comm'}>Comments: </h1>
                <ListComments comments={comms} isLoading={isCommsLoading}/>
              </div>
            </div>
          :
            <div>
              <PostTitle cl={'post__title'} post={openedPost}/>
              <div className={'post__text'}>{openedPost.body}</div>
            </div>
      }

    </div>
  )
}

export default PostPage