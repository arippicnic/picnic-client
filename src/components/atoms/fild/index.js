import React from 'react';
import classnames from "classnames";

import styles from "./fild.module.scss";

const Fild = (props) => {
    return <input type={props.type} className={classnames(styles.field, props.className)} />;
};

export default Fild;