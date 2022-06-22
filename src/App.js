import React, {useEffect, useState} from 'react'

import './style/App.css';
import {PostList} from './components/PostList';
import {PostForm} from './components/PostForm';
import {PostFilter} from './components/PostFilter';
import {MyModal} from './components/MyModal/MyModal';
import {usePosts} from './hooks/usePosts';
import PostService from './API/PostService';
import {Loader} from './components/UI/loader/Loader';
import {useFetching} from './hooks/useFetching';


function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts)
    })

    useEffect(() => {
        debugger
        fetchPosts();
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
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
                                remove={removePost}/>}
            </div>
        </div>
    );
}

export default App;
