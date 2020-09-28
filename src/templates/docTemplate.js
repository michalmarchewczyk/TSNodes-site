import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LeftMenu from '../components/leftMenu';
import MenuLink from '../components/menuLink';

import docTemplateStyles from './docTemplate.module.scss';


const Template = ({data}) => {
    const {markdownRemark} = data;
    const {frontmatter, html} = markdownRemark;
    
    return (
        <Layout>
            <SEO title={`${frontmatter.title} - Documentation`}/>
            <LeftMenu>
                <MenuLink to={`/docs/quick-start`} text='Quick start'/>
                <MenuLink to={`/docs/install`} text='Installation'/>
                <MenuLink to={`/docs/setup`} text='Editor setup'/>
                <MenuLink to={`/docs/nodes`} text='Creating nodes'/>
                <MenuLink to={`/docs/inputs`} text='Adding inputs'/>
                <MenuLink to={`/docs/outputs`} text='Adding outputs'/>
            </LeftMenu>
            <article className={docTemplateStyles.container}>
                <div
                    className={docTemplateStyles.content}
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </article>
        </Layout>
    );
};

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
