import React from 'react'
import { IPost } from '../types/postsTypes';


export const useSortedPosts = (posts: any, sorted: string): IPost[] => {
    const sortedPosts = React.useMemo(() => {
        if(sorted) {
          return [...posts].sort((a, b) => a[sorted].localeCompare(b[sorted]));
        }
        return posts;
    }, [sorted, posts])

    return sortedPosts;
}

export const usePosts = (posts: IPost[], sorted: string, search: string) => {
    const sortedPosts = useSortedPosts(posts, sorted);
    const sortedAndSearchedPosts = React.useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()));
    }, [search, sortedPosts])
    return sortedAndSearchedPosts;
}