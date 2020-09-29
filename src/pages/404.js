import React from 'react';

import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import notFoundStyles from './404.module.scss';

const NotFoundPage = () => (
    <Layout>
        <SEO title='404 Not found'/>
        <div className={notFoundStyles.container}>
            <h1>404 Not Found</h1>
            <p>
                The page you are looking for doesn't exist or was moved to another address.
                <br/>
                Please go back to previous page, or go to <Link to='/' style={{fontWeight: 600}}>home page</Link>.
            </p>
        </div>
    </Layout>
);

export default NotFoundPage;
