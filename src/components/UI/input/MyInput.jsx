import React from 'react'

import s from './MyInput.module.css';

export const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={s.myInput} {...props}/>
    )
})
