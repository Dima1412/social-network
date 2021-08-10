import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import styles from './users.module.css';



let Users = (props) => {


    return (
        <div className={styles.usersBlock}>
            <Paginator currentPage={props.currentPage}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged} />
            {
            [...props.users].reverse().map(u => <User user={u}
                                       followingInProgress={props.followingInProgress}
                                       follow={props.follow}
                                       unfollow={props.unfollow}
                                       key={u.id} />)
            }
        </div>
    )
}



export default Users;