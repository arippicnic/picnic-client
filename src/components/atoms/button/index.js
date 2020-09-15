import React from 'react';
import classnames from "classnames";

import styles from "./button.module.scss";

const Button = (props) => {
    return <button type={props.type} className={classnames(styles.button)} >{props.children}</button>;
};

export default Button;