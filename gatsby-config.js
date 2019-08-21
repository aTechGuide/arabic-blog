const cspDirectives = [
  "default-src 'self' https://disqus.com https://c.disquscdn.com",
  "script-src 'self' 'unsafe-inline' https://www.google-analytics.com https://arabic-blog.disqus.com",
  "frame-src https://disqus.com",
  "font-src 'self' data: https://fonts.googleapis.com https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://c.disquscdn.com",
  "img-src 'self' data: https://www.google-analytics.com https://referrer.disqus.com https://c.disquscdn.com",
  "object-src 'none'"
];

const directivesToCspHeader = headers => headers.join(';');

module.exports = {
  siteMetadata: {
    // Final blog https://github.com/hidjou/classsed-gatsby-blog/
    title: `Arabic Blog`,
    description: `Kamran Ali's Arabic Grammar Blog`,
    author: `Kamran Ali`,
    twitterId: `@aTechGuide`,
    //siteUrl: `https://arabicblog.info`,
    siteUrl: `https://arabicblog.netlify.com`,
    genre: 'Arabic Grammar Tutorials',
    keywords: [`Arabic`, `ArabicBlog`, `Arabic Tutorials`, `Arabic Grammar`, `Arabic Grammar Tutorials`, `Learn Arabic in English`],
    email: `admin@arabicblog.info`,
    paginate: `12`,
    social: [
      'https://www.facebook.com/arabicblog/'
    ],
    contactSupport: 'https://www.facebook.com/arabicblog/',
    bingId: 'B73F178C4AB143116D3FE641C6044861',
    menuLinks: [{name: 'Tags', link: '/tags/'}],
    comments: 'false' // Enable disable comments
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog-starter",
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: "src/images/icon.png",
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
            `Content-Security-Policy: ${directivesToCspHeader(cspDirectives)}`,
            'Referrer-Policy: no-referrer-when-downgrade'
          ]
        }
      }
    }
  ]
}
