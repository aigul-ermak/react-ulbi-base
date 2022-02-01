import React, {useMemo, useRef, useState} from 'react'
import {PostItem} from './components/PostItem';

import './style/App.css';
import {PostList} from './components/PostList';
import {MyButton} from './components/UI/button/MyButton';
import {MyInput} from './components/UI/input/MyInput';
import {PostForm} from './components/PostForm';
import {MySelect} from './components/UI/select/MySelect';
import {PostFilter} from './components/PostFilter';
import {MyModal} from './components/MyModal/MyModal';


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'Areact', body: 'Description'},
        {id: 3, title: 'Typescript', body: 'Description'}
    ])

    // const [selectedSort, setSelectedSort] = useState('') sort
    // const [searchQuery, setSearchQuery] = useState('')search

    const [filter, setFilter] = useState({sort: '', query: ''})
    const[modal, setModal] = useState(false)


    const sortedPosts = useMemo(() => {
        console.log("getSortedPost has done")
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            {/*<PostForm create={createPost}/>*/}
            <hr style={{margin: '15px 0'}}/>
            <div>
                <button style={{}} onClick={() => setModal(true)}>Add post</button>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                <PostFilter filter={filter} setFilter={setFilter}/>
                {/*<MyInput*/}
                {/*    placeholder='Search...'*/}
                {/*    value={searchQuery}*/}
                {/*    onChange={(e) => setSearchQuery(e.target.value)}/>*/}
                {/*<MySelect*/}
                {/*    defaultValue='Sorted value'*/}
                {/*    value={selectedSort}*/}
                {/*    onChange={sortPosts}*/}
                {/*    options={[*/}
                {/*        {value: 'title', name: 'By name'},*/}
                {/*        {value: 'body', name: 'By description'}]*/}
                {/*    }/>*/}
            </div>
            <PostList posts={sortedAndSearchedPosts}
                      title="About Js"
                      remove={removePost}/>

            {/*{sortedAndSearchedPosts.length !== 0*/}
            {/*    ? <PostList posts={sortedAndSearchedPosts}*/}
            {/*                title="About Js"*/}
            {/*                remove={removePost}/>*/}
            {/*    : <h1 style={{textAlign: 'center'}}>No posts</h1>*/}
            {/*}*/}

        </div>
    );
}

export default App;
