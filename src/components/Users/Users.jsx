import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../asseds/images/user.png';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = props.firstButton; i < props.firstButton + props.quantityButtons && i < pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            <span onClick={(e) => { props.onStackPagesChanged("left", pagesCount) }}>&lt;</span>

            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
            <span onClick={(e) => { props.onStackPagesChanged("right", pagesCount) }}>&gt;</span>
        </div>
        <button onClick={props.getUsers}>Get users</button>
        {
            props.users.map(u => <div key="u.id">
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>
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