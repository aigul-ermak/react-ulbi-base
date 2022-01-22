import React, {useState} from 'react'
import {MyInput} from './UI/input/MyInput';
import {MyButton} from './UI/button/MyButton';


export const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
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
    )
}
