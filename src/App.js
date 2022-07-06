import React from 'react'

import './style/App.css';
import {Navbar} from './components/UI/navbar/Navbar';
import {AppRouter} from './components/UI/AppRouter';

function App() {
    return (
        <>
            <Navbar/>
            <AppRouter/>
        </>
    );
}

export default App;
