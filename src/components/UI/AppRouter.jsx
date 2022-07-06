import {Route, Routes} from 'react-router-dom';
import {About} from '../../pages/About';
import {Posts} from '../../pages/Posts';
import {Notfoundpage} from '../../pages/Notfoundpage';
import React from 'react';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='*' element={<Notfoundpage/>}/>
        </Routes>
    )
}
