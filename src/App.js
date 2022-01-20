import React, {useState} from 'react'

import './App.css';
import {Counter} from './components/Counter';

function App() {


    const [value, setValue] = useState('text in button')

    function onChangeHandler(e) {
        setValue(e.target.value)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <input type='text' value={value} onChange={onChangeHandler}/>
            <Counter/>
        </div>
    );
}

export default App;
