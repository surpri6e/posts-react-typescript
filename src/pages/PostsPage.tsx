import React from 'react';

import Pagination from '../components/Pagination'
import Button from '../components/UI/buttons/Button';
import Modal from '../components/UI/modals/Modal';
import Loader from '../components/UI/loaders/Loader';
import Mistake from '../components/UI/mistakes/Mistake';

import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';

import PostService from '../API/PostService';

import { getPageCount, getPagesArray } from '../utils/pagesUtil';
import { IPost } from '../types/postsTypes';
import { IFilter } from '../types/filterTypes';
import PostsList from '../components/Posts/PostsList';

import '../styles/PostsPage.css'
import PostCreateForm from '../components/Posts/PostCreateForm';


const PostsPage: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [filter, /* setFilter */] = React.useState<IFilter>({sorted: '', search: ''});
  const [visible, setVisble] = React.useState<boolean>(false);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const sortedAndSearchedPosts = usePosts(posts, filter.sorted, filter.search);

  const [limit] = React.useState<number>(10);
  const [page, setPage] = React.useState<number>(1);

  const pages = getPagesArray(totalPages);

  const {serverRequest, isLoading, err} = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    setPosts(res.data);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  React.useEffect(() => {
    serverRequest();
    // eslint-disable-next-line
  }, [page])

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
    setVisble(false);
  }
  
  const deletePost = (post: IPost) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="posts">
      <div style={{paddingTop: 20, textAlign: 'center'}}>
        <Button click={() => setVisble(true)}>Create Post</Button>
      </div>
      <Modal isVisible={visible} setIsVisible={setVisble}>
        <PostCreateForm create={createPost}/>
      </Modal>
      {/* <PostFilter filter={filter} setFilter={setFilter} options={[
        {value: 'title', text: 'Title'},
        {value: 'body', text: 'Body'}
      ]}/> */}
      {
        err && 
          <Mistake mistake={err}/>
      }
      {
        isLoading
          ? <Loader _addStyle={{margin: '30px auto'}}/>
          : <PostsList remove={deletePost} posts={sortedAndSearchedPosts} category={'Список постов'}/>
      }
      <Pagination pages={pages} currentPage={page} setCurrentPage={setPage}/>
    </div>
  );
}


export default PostsPage;