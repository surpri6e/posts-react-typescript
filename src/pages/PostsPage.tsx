import React from 'react';

import Pagination from '../components/Pagination'
import Button from '../components/UI/buttons/Button';
import Modal from '../components/UI/modals/Modal';
import Loader from '../components/UI/loaders/Loader';
import Mistake from '../components/UI/mistakes/Mistake';

import { usePosts } from '../hooks/usePosts';

import PostService from '../API/PostService';

import { getPageCount, getPagesArray } from '../utils/pagesUtil';


const PostsPage: React.FC = () => {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({sorted: '', search: ''});
  const [visible, setVisble] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(0);

  const sortedAndSearchedPosts = usePosts(posts, filter.sorted, filter.search);

  const [limit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const pages = getPagesArray(totalPages);

  const [serverRequest, isLoading, err] = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    setPosts(res.data);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  React.useEffect(() => {
    serverRequest();
    // eslint-disable-next-line
  }, [page])

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setVisble(false);
  }
  
  const deletePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="posts">
      <Button click={() => setVisble(true)}>Create Post</Button>
      <Modal isVisible={visible} setIsVisible={setVisble}>
        {/* <PostForm create={createPost}/> */}
        HEHEEHHEHE
      </Modal>
      {/* <PostFilter filter={filter} setFilter={setFilter} options={[
        {value: 'title', text: 'Title'},
        {value: 'body', text: 'Body'}
      ]}/> */}
      {err && <Mistake mistake={err}/>}
      {
        isLoading
          ? <Loader/>
          : <PostList remove={deletePost} posts={sortedAndSearchedPosts} category={'Список постов'}/>
      }
      <Pagination pages={pages} currentPage={page} setCurrentPage={setPage}/>
    </div>
  );
}


export default PostsPage;