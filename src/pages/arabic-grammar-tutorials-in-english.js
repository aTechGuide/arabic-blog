import React from 'react';

import Layout from "gatsby-theme-blog-starter/src/components/layout/layout"
import Seo from "gatsby-theme-blog-starter/src/components/seo/Seo"
import AboutLayout from '../components/layouts/AboutLayout';

const About = () => {
  return(
  <Layout pageTitle="About">
    <Seo 
      title="Arabic Grammar Tutorials in Simple English For Beginners"
      description="Easy Arabic Grammar basic rules in simple English for beginners. It covers fundamentals of Arabic Grammar Verbs (Tenses). Arabic Grammar Lessons for understanding Quran"
      tags={["Arabic Grammar Tutorials in English", "Arabic Grammar Tutorials for beginners"]}
      slug="/arabic-grammar-tutorials-in-english"  />
    
    <AboutLayout />
  </Layout>
)}

export default About