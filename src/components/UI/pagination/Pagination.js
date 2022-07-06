import React from 'react';



export const Pagination = ({page, changePage, pagesArray}) => {
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : "page"}>
                    {p}
                </span>
            )}
        </div>
    )
}
