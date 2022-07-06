import React, {useEffect, useState} from 'react';
import {usePosts} from '../hooks/usePosts';
import {getPageCount, getPagesArray} from '../utils/pages';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import {MyModal} from '../components/MyModal/MyModal';
import {PostForm} from '../components/PostForm';
import {PostFilter} from '../components/PostFilter';
import {Loader} from '../components/UI/loader/Loader';
import {PostList} from '../components/PostList';
import {Pagination} from '../components/UI/pagination/Pagination';


export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    let pagesArray = getPagesArray(totalPages);


    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>get data</button>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <button style={{}} onClick={() => setModal(true)}>Add post</button>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}/>
                {postError &&
                    <h1>Error is here</h1>}
                {isPostLoading
                    ? <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '50px'
                    }}><Loader/>
                    </div>
                    : <PostList posts={sortedAndSearchedPosts}
                                title="About Js"
                                remove={removePost}
                    />}

            </div>
            <Pagination
                page={page}
                changePage={changePage}
                pagesArray={pagesArray}/>
        </div>
    )
}
