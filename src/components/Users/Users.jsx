import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../asseds/images/user.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = props.firstButton; i < props.firstButton + props.quantityButtons && i < pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            <span onClick={(e) => { props.onStackPagesChanged("left", pagesCount) }}className={styles.page}>&lt;</span>

            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : styles.page}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
            <span onClick={(e) => { props.onStackPagesChanged("right", pagesCount) }} className={styles.page}>&gt;</span>
        </div>
        {/* <button onClick={props.getUsers}>Get users</button> */}
        {
            props.users.map(u => <div key="u.id" className={styles.userCard}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button disabled={props.followingInProgress.some(id=>id===u.id)}
                                 onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                                <button disabled={props.followingInProgress.some(id=>id===u.id)} 
                                onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>{u.status}<div></div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;