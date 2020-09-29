import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LeftMenu from '../components/leftMenu';
import MenuLink from '../components/menuLink';

import docTemplateStyles from './docTemplate.module.scss';


const Template = ({data}) => {
    
    const {markdownRemark, allMarkdownRemark} = data;
    const {frontmatter, html} = markdownRemark;
    
    let docPages = allMarkdownRemark.nodes;
    
    return (
        <Layout>
            <SEO title={`${frontmatter.title} - Documentation`}/>
            <LeftMenu>
                {docPages.map(page => (
                    <MenuLink to={page.frontmatter.path} text={page.frontmatter.title} key={page.frontmatter.id}/>
                ))}
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
    allMarkdownRemark(sort: {fields: frontmatter___id, order: ASC}) {
      nodes {
        frontmatter {
          path
          title
          id
        }
      }
    }
  }
`;
