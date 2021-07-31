import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.jpg';
import styles from './users.module.css';



let User = ({user, ...props}) => {


    return (
        <div key={props.key}
             className={styles.userCard}>
            <span>
                <NavLink to={'/profile/' + user.id}>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} 
                             className={styles.userPhoto} />
                    </div>
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>
    )
};



export default User;