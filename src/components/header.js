import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/logo.png';

import headerStyles from './header.module.scss';
import useScrollPosition from '../hooks/useScrollPosition';


const Header = ({siteTitle, scroll}) => {
    
    let scrollY = useScrollPosition();
    
    return (
        <header className={headerStyles.header} data-scroll={scroll ? scrollY : 0}>
            <Link to='/'>
                <div className={headerStyles.logo}>
                    <img src={logo} alt={siteTitle}/>
                </div>
            </Link>
            <nav className={headerStyles.nav}>
                <Link to='/docs/install'>Install</Link>
                <Link to='/docs/quick-start'>Documentation</Link>
                <Link to='/examples'>Examples</Link>
                <a href='https://github.com/michalmarchewczyk/tsnodes'>GitHub</a>
            </nav>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
