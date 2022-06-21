import React, {useEffect, useState} from 'react'

import './style/App.css';
import {PostList} from './components/PostList';
import {PostForm} from './components/PostForm';
import {PostFilter} from './components/PostFilter';
import {MyModal} from './components/MyModal/MyModal';
import {usePosts} from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';


function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostLoading, setIsPostLoading] = useState(false);


    useEffect(() => {
        fetchPosts();
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostLoading(true)
        setTimeout(async () => {
            const posts = await PostService.getAll();
            setPosts(posts)
            setIsPostLoading(false)
        }, 1000)
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
                <PostFilter filter={filter} setFilter={setFilter}/>
                {isPostLoading
                    ? <h1>Loading...</h1>
                    : <PostList posts={sortedAndSearchedPosts}
                                title="About Js"
                                remove={removePost}/>}
            </div>
        </div>

    );
}

export default App;
