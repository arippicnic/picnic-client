import React from 'react';

import styles from "./userImage.module.scss";
import img from "../../../assets/images/img/user-1.jpg";

const UserImage = () => {
    return <img src={img} alt="User Image" className={styles.userImage} />;
};

export default UserImage;