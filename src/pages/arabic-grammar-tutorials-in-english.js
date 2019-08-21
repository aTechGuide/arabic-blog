import React from 'react';

import Layout from "gatsby-theme-blog-starter/src/components/layout/layout"
import Seo from "gatsby-theme-blog-starter/src/components/seo/Seo"
import AboutLayout from 'gatsby-theme-blog-starter/src/components/layout/AboutLayout';

const About = () => {
  return(
  <Layout pageTitle="About">
    <Seo 
      title="About"
      description="About Page"
      tags={["About Page"]}
      slug="/arabic-grammar-tutorials-in-english"  />
    
    <AboutLayout />
  </Layout>
)}

export default About