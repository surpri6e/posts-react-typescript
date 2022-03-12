import React from 'react'

export const useSortedPosts = (posts: any, sorted : any) => {
    const sortedPosts = React.useMemo(() => {
        if(sorted) {
          return [...posts].sort((a, b) => a[sorted].localeCompare(b[sorted]));
        }
        return posts;
    }, [sorted, posts])

    return sortedPosts;
}

export const usePosts = (posts : any, sorted : any, search : any) => {
    const sortedPosts = useSortedPosts(posts, sorted);
    const sortedAndSearchedPosts = React.useMemo(() => {
        return sortedPosts.filter((post: any) => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()));
    }, [search, sortedPosts])
    return sortedAndSearchedPosts;
}