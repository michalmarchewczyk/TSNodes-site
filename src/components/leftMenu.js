import React from 'react';
import PropTypes from 'prop-types';

import leftMenuStyles from './leftMenu.module.scss';


const LeftMenu = ({children}) => {
    return (
        <div className={leftMenuStyles.leftMenu}>
            {children}
        </div>
    );
};

LeftMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LeftMenu;
