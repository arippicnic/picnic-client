import React from 'react';

import styles from "./content.module.scss";

const Conntent = (props) => {
    return (
        <div className={`${props.className} ${styles.content}`}>
            {props.children}
        </div>
    );
};

export default Conntent;