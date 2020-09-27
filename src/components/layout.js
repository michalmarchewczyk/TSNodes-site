import React from 'react'
import PropTypes from 'prop-types'
import {graphql, useStaticQuery} from 'gatsby'

import Header from './header'
import './layout.scss'


const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    
    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
            <div>
                <main>{children}</main>
                <footer>
                
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
