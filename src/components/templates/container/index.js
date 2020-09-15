import React from "react";
import classnames from 'classnames'

import view from "./container.module.scss";

const Container = props => {
    const getClass = (someInput) => {
        switch (someInput) {
            case 'base': {
                return view.container_base;
            }
            case 'auth': {
                return view.container_auth;
            }
        }
    }
    return (
        <div className={classnames(view.container, getClass(props.container))}>
            {props.children}
        </div>
    );
};

export default Container;