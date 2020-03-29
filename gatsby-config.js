module.exports = {
  siteMetadata: {
    title: `Arabic Blog`,
    description: `Easy Arabic Grammar basic rules in simple English for beginners. It covers fundamentals of Arabic Grammar Verbs (Tenses). Arabic Grammar Lessons for understanding Quran`,
    author: `Kamran Ali`,
    twitterId: `@aTechGuide`,
    siteUrl: `https://arabicblog.info`,
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
  plugins: [
    {
      resolve: "gatsby-theme-blog-starter",
      options: {
        trackingId: "UA-27634418-5",
        postsPath: "posts",
        imagesPath: "images",
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
          "default-src": "'self' disqus.com c.disquscdn.com marketingplatform.google.com/about/analytics/ www.google-analytics.com www.google.com/analytics/",
          "script-src": "'self' 'unsafe-inline' www.google-analytics.com arabic-blog.disqus.com", //<- 'unsafe-inline' is unsafe and is required by Disqus
          "style-src": "'self' 'unsafe-inline' c.disquscdn.com", //<- "'unsafe-inline'" should be avoided but the plugin was broken with mergeStyleHashes
          "img-src": "'self' data: www.google-analytics.com referrer.disqus.com c.disquscdn.com"
        }
      }
    }
  ]
}
