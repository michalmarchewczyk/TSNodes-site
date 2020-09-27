import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png';

import headerStyles from './header.module.scss'


const Header = ({siteTitle}) => (
    <header className={headerStyles.header}>
        <Link to='/'>
            <div className={headerStyles.logo}>
                <img src={logo} alt={siteTitle}/>
            </div>
        </Link>
        <nav className={headerStyles.nav}>
            <Link to='docs/install'>Install</Link>
            <Link to='docs/quick-start'>Documentation</Link>
            <Link to='docs/examples'>Examples</Link>
            <a href='https://github.com/michalmarchewczyk/tsnodes'>GitHub</a>
        </nav>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
