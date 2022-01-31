import React, {useMemo, useRef, useState} from 'react'
import {PostItem} from './components/PostItem';

import './style/App.css';
import {PostList} from './components/PostList';
import {MyButton} from './components/UI/button/MyButton';
import {MyInput} from './components/UI/input/MyInput';
import {PostForm} from './components/PostForm';
import {MySelect} from './components/UI/select/MySelect';


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Description'},
        {id: 2, title: 'Areact', body: 'Description'},
        {id: 3, title: 'Typescript', body: 'Description'}
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    // function getSortedPost() {
    //
    // }
    const sortedPosts = useMemo(() => {
        console.log("getSortedPost has done")
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                <MySelect
                    defaultValue='Sorted value'
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                        {value: 'title', name: 'By name'},
                        {value: 'body', name: 'By description'}]
                    }/>
            </div>
            {sortedAndSearchedPosts.length !== 0
                ? <PostList posts={sortedAndSearchedPosts}
                            title="About Js"
                            remove={removePost}/>
                : <h1 style={{textAlign: 'center'}}>No posts</h1>
            }


        </div>
    );
}

export default App;
