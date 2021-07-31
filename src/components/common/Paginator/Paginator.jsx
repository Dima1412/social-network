import React, { useState } from 'react';
import styles from './Paginator.module.css';



let Paginator = (props) => {

    let [portions, setPortions] = useState(0);


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };




    return (

        <div className={styles.paginatorMain}>

            <span>
                <button
                    onClick={() => setPortions(portions - 1)}
                    disabled={portions < 1}
                >←</button>
            </span>
            <div className={styles.pagesForm}>
                {pages.slice(portions * 20, (portions + 1) * 20).map(p => {
                    return <div className={styles.page + " " +
                        (props.currentPage === p ? styles.selectedPage : '')}
                        onClick={() => { props.onPageChanged(p) }}>{p}</div>
                })}
            </div>
            <span>
                <button
                    onClick={() => setPortions(portions + 1)}
                    disabled={portions > Math.floor(pagesCount / 20) - 1}
                >→</button>
            </span>
        </div>

    )
}



export default Paginator;