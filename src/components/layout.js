import React from 'react'
import PropTypes from 'prop-types'
import {graphql, useStaticQuery} from 'gatsby'

import Header from './header'
import layoutStyles from './layout.module.scss'
import Footer from './footer';


const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `);
    
    return (
        <div className={layoutStyles.container}>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} scroll/>
            
            <main>
                {children}
            </main>
            
            <Footer/>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
