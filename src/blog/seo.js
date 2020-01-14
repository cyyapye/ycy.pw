import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';


export default props => (
  <StaticQuery
    query={graphql`
        query {
          site {
            siteMetadata {
              siteTitle: title
              siteUrl
            }
          }
        }
      `}
      render={data => (
        <Helmet>
          <meta name="description" content={props.description}/>
          <meta name="image" content={data.site.siteMetadata.siteUrl + props.image}/>
          <meta property="og:url" content={data.site.siteMetadata.siteUrl + props.slug}/>
          <meta property="og:type" content="article"/>
          <meta property="og:title" content={props.title}/>
          <meta property="og:description" content={props.description}/>
          <meta property="og:image" content={data.site.siteMetadata.siteUrl + props.image}/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:creator" content="@cyyapye"/>
          <meta name="twitter:title" content={props.title}/>
          <meta name="twitter:description" content={props.description}/>
          <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + props.image}/>
          <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${data.site.siteMetadata.siteUrl}${props.slug}"
            },
            "headline": "${props.title}",
            "image": ["${data.site.siteMetadata.siteUrl}${props.image}"],
            "datePublished": "${props.date}",
            "dateModified": "${props.date}",
            "author": {
              "@type": "Person",
              "name": "${props.author}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "${data.site.siteMetadata.siteTitle}",
              "logo": {
                "@type": "ImageObject",
                "url": "${data.site.siteMetadata.siteUrl}/logo.png"
              }
            },
            "description": "${props.description}"
        }
      `}</script>
  </Helmet>
      )} />
)
