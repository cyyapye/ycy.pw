import React from 'react';
import Layout from '../common/layouts';
import Hero from './components/hero.js';
import Body from './components/body.js';
import Seo from './seo.js';
import MetaSeo from '../common/seo';
import { graphql } from 'gatsby';


export default ({location, data }) => {
  const {
    date,
    dateOriginal,
    title,
    metaDescription
  } = data.post.frontmatter;
  const content = data.post.html;
  return (
    <Layout>
      <Seo
        slug={data.post.fields.slug}
        title={title}
        date={dateOriginal}
        description={metaDescription}
        image={data.post.frontmatter.postImage.childImageSharp.original.src} />
      <MetaSeo
        title={title}
        description={metaDescription} />
      <Hero date={date} title={title} />
      <Body
        content={content}
        description={metaDescription}
        image={data.post.frontmatter.postImage.childImageSharp.original.src}
        location={location}
      />
    </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        dateOriginal: date
        title
        metaDescription
        postImage {
          childImageSharp {
            original {
              src
            }
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    date: markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        date
      }
    }
  }
`
