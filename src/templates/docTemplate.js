import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout';
import SEO from '../components/seo';


const Template = ({data}) => {
    const {markdownRemark} = data
    const {frontmatter, html} = markdownRemark
    
    return (
        <Layout>
            <SEO title={`${frontmatter.title} - Documentation`}/>
            <div
                dangerouslySetInnerHTML={{__html: html}}
            />
        </Layout>
    )
}

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
`
