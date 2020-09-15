import React from 'react';
import classnames from 'classnames';

import styles from "./logo.module.scss";
import logo from "../../../assets/images/logo/logo.png";

const Logo = (props) => {
    const getClass = (someInput) => {
        switch (someInput) {
            case 'header': {
                return styles.logo_1;
            }
            case 'auth': {
                return styles.logo_2;
            }
        }
    }
    return <img src={logo} alt="Picnic Logo" className={classnames(getClass(props.type), props.className)} />;
};

export default Logo;