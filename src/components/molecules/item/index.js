import React from 'react';

import styles from "./item.module.scss";

const Item = (props) => {
    return (
        <div className={styles.item}>
            <blockquote className={styles.item_text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fuga doloremque architecto dicta animi, totam, itaque
                officia ex.
			</blockquote>
            {props.children}
        </div>
    );
};

export default Item;