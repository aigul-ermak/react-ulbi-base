import React, {useRef, useState} from 'react'
import {PostItem} from './components/PostItem';

import './style/App.css';
import {PostList} from './components/PostList';
import {MyButton} from './components/UI/button/MyButton';
import {MyInput} from './components/UI/input/MyInput';
import {PostForm} from './components/PostForm';


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'React', body: 'Description'},
        {id: 3, title: 'Typescript', body: 'Description'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
            ? <PostList posts={posts}
                        title="About Js"
                        remove={removePost}/>
            : <h1 style={{textAlign: 'center'}}>No posts</h1>
            }


        </div>
    );
}

export default App;
