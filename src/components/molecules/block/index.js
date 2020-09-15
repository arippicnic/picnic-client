import React from 'react';
import classnames from "classnames";

import styles from "./block.module.scss";

const Block = (props) => {
    const getClass = (someInput) => {
        switch (someInput) {
            case '1': {
                return styles.block_1;
            }
            case '2': {
                return styles.block_2;
            }
        }
    }
    return (
        <div className={classnames(styles.block, getClass(props.block))}>
            {props.children}
        </div>
    );
};

export default Block;