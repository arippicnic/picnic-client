import React from "react";

import view from "./container.module.scss";

const Container = props => {
    return (
        <div className={view.container}>
            {props.children}
        </div>
    );
};

export default Container;