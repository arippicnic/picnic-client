import React from 'react';

import styles from "./logo.module.scss";
import logo from "../../../assets/images/logo/logo.png";

const Logo = () => {
    return <img src={logo} alt="Picnic Logo" className={styles.logo} />;
};

export default Logo;