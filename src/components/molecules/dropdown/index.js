import React from 'react';

import styles from "./dropdown.module.scss";

const DropDwon = (props) => {
    return (
        <div className={styles.dropDown}>
            {props.children}
        </div>
    );
};

export default DropDwon;