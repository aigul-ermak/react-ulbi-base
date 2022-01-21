import React, {useRef, useState} from 'react'
import {PostItem} from './components/PostItem';

import './style/App.css';
import {PostList} from './components/PostList';
import {MyButton} from './components/UI/button/MyButton';
import {MyInput} from './components/UI/input/MyInput';


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'React', body: 'Description'},
        {id: 3, title: 'Typescript', body: 'Description'}
    ])

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id:Date.now()}])
        setPost({title: '', body: ''})

        // console.log(bodyInputRef.current.value)
    }
    // const bodyInputRef = useRef();

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Name of text"/>
                <MyInput
                    // ref={bodyInputRef}
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Description of text"/>
                <MyButton
                    onClick={addNewPost}>Create post</MyButton>
            </form>

            <PostList posts={posts} title="About Js"/>

        </div>
    );
}

export default App;
