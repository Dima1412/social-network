import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.jpg';
import styles from './users.module.css';



let User = ({user, ...props}) => {


    return (
        <div key={props.key}
             className={styles.userCard}>
            <div>
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
            </div>
            <div>
                <div>{user.name}</div>
                <div><b>{user.status}</b></div>
            </div>
            <div>── • ✤ • ──</div>
        </div>
    )
};



export default User;