import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img src="https://i.pinimg.com/originals/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg" className={s.ava}/>
            </div>
            <div>
            Image+Disc
            </div>
        </div>
    );
}

export default ProfileInfo;