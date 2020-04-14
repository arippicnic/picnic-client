import React from 'react';

const Footer = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default Footer;