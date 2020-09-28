import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'gatsby';

import menuLinkStyles from './menuLink.module.scss';


const MenuLink = ({to, text}) => {
    return (
        <Link to={to} className={menuLinkStyles.menuLink}>
            {text}
        </Link>
    );
};

MenuLink.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string,
};

export default MenuLink;
