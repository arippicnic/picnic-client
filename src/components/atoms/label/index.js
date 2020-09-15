import React from 'react';
import classnames from "classnames";

import styles from "./label.module.scss";

const Label = (props) => {
    return <label className={classnames(styles.label)} >{props.children}</label>;
};

export default Label;