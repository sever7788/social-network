import preloader from "../../../asseds/images/preloader.gif";
import React from'react';
import styles from './Preloader.module.css';
let Preloader=(props)=>{
    return <div className={styles.preloader}>
        <img src={preloader} className={styles.preloader}alt="preloader"/>
    </div>
}

export default Preloader;