import React from 'react';

import styles from "./navLink.module.scss";

const Link = (props) => {
    return (
        <ul className={styles.navLink}>
            {props.children}
        </ul>
    );
};

export default Link;