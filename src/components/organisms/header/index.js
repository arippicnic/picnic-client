import React from 'react';

import styles from "./header.module.scss";

const Header = (props) => {
    return (
        <nav className={styles.header}>
            {props.children}
        </nav>
    );
};

export default Header;