import React from 'react';
import {
  FaTwitter,
  FaPinterestP,
  FaFacebookF
} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'
import { StaticQuery, graphql } from 'gatsby';
import 'tachyons';


export default (props) => {
  let { title, desc, img, location } = props;
  location = encodeURIComponent(location.pathname);
  desc = encodeURIComponent(desc);
  img = encodeURIComponent(img);
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }  
      `}
      render={data => {
        const base = encodeURIComponent(data.site.siteMetadata.siteUrl);
        return (
        <div className="dn db-l" style={{gridArea: "sidebar"}}>
          <div className="w3 bg-dark-gray flex flex-wrap" style={{position: "sticky", top: "4rem"}}>
            <a
              href={`mailto:?&body=${title + " " + base + location}`}
              className="w-100 h3 flex items-center justify-center b near-white"><FiMail /></a>
            <a
              href={`https://twitter.com/intent/tweet?text=${title}&url=${base + location}`}
              className="w-100 h3 flex items-center justify-center b near-white"><FaTwitter /></a>
          </div>
        </div>
    )}} />
  )
}
