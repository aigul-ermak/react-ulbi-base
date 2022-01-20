import React, {useState} from 'react'


export const Counter = () => {

    const [likes, setLikes] = useState(0)

    function increment() {
        setLikes(likes + 1)
        console.log('inc')
    }

    function decrement() {
        setLikes(likes - 1)
        console.log('dec')
    }

    return (
        <div>
            <h1>{likes}</h1>

            <button onClick={increment}>Increment< /button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
