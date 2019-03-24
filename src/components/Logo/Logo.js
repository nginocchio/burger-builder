import React from 'react';
import burger from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burger} alt="burger" />
    </div>
);

export default logo;