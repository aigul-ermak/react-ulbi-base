import React from 'react'

import s from './MyModal.module.css';


export const MyModal = ({children, visible, setVisible}) => {

const rootClasses = [s.myModal]
    if (visible) {
        rootClasses.push(s.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={s.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
