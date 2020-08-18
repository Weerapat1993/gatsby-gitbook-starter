const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://use-codex.netlify.app',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: './logo.svg',
    logoLink: 'https://use-codex.netlify.app/',
    title: "<a href='https://use-codex.netlify.app/'>CODEX</a>",
    githubUrl: 'https://github.com/Weerapat1993/use-codex',
    helpUrl: '',
    tweetText: '',
    // social: '',
    links: [{ text: 'Home', link: 'https://use-codex.netlify.app/' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/getting-started', // add trailing slash if enabled above
      '/codeblock',
      '/api',
    ],
    collapsedNav: [
      '/getting-started', // add trailing slash if enabled above
      '/codeblock', // add trailing slash if enabled above
      '/api',
    ],
    links: [{ text: 'Github', link: 'https://github.com/Weerapat1993/use-codex' }],
    frontline: false,
    ignoreIndex: true,
    // title: "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'React Codex API Documentation | Codex',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/Weerapat1993/gatsby-gitbook-starter/tree/master/content',
    favicon: './logo.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'React Codex API Documentation',
      short_name: 'Codex Doc',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
