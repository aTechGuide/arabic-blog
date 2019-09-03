module.exports = {
  siteMetadata: {
    // Final blog https://github.com/hidjou/classsed-gatsby-blog/
    title: `Arabic Blog`,
    description: `Kamran Ali's Arabic Grammar Blog`,
    author: `Kamran Ali`,
    twitterId: `@aTechGuide`,
    siteUrl: `https://arabicblog.info`,
    //siteUrl: `https://arabicblog.netlify.com`,
    genre: 'Arabic Grammar Tutorials',
    keywords: [`Arabic`, `ArabicBlog`, `Arabic Tutorials`, `Arabic Grammar`, `Arabic Grammar Tutorials`, `Learn Arabic in English`],
    email: `admin@arabicblog.info`,
    social: [
      'https://www.facebook.com/arabicblog/'
    ],
    contactSupport: 'https://www.facebook.com/arabicblog/',
    bingId: 'B73F178C4AB143116D3FE641C6044861',
    menuLinks: [{name: 'Tags', link: '/tags/'}],
    footerLinks: [{name: 'About', link: '/arabic-grammar-tutorials-in-english/'}, {name: 'Terms of Use', link: '/terms-of-use/'}, {name: 'Privacy Policy', link: '/privacy-policy/'}],
    displayFooterMessage: true,
    comments: 'true' // Enable disable comments
  },
  //__experimentalThemes: ['gatsby-theme-blog-starter'],
  plugins: [
    {
      resolve: "gatsby-theme-blog-starter",
      options: {
        trackingId: "UA-27634418-5",
        postsPath: "posts",
        postsPerPage: "12",
        mailchimpURL: "https://kamranali.us19.list-manage.com/subscribe/post?u=81033a93b0c17d2aca19ba835&amp;id=32d4ecb6e3"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, //<- Creates manifest file
      options: {
        name: "ArabicBlog.info",
        short_name: "ArabicBlog",
        description: "Arabic Notes",
        start_url: "/",
        background_color: "#673ab7",
        theme_color: "#673ab7",
        display: "standalone",
        icon: "images/icon.png",
      },
    },
    `gatsby-plugin-offline`, //<- Adds service worker; Add after gatsby-plugin-manifest
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: no-referrer-when-downgrade'
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false, 
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self' https://disqus.com https://c.disquscdn.com ",
          "script-src": "'self' 'unsafe-inline' www.google-analytics.com https://arabic-blog.disqus.com", //<- 'unsafe-inline' is unsafe and is required by Disqus
          "style-src": "'self' 'unsafe-inline'", //<- "'unsafe-inline'" should be avoided but the plugin was broken with mergeStyleHashes
          "img-src": "'self' data: www.google-analytics.com https://referrer.disqus.com https://c.disquscdn.com"
        }
      }
    }
  ]
}
