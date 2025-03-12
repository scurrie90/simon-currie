module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":660,"showCaptions":["title"],"markdownCaptions":true,"withWebp":true,"linkImagesToOriginal":false,"backgroundColor":"transparent","quality":50,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Simon Currie","short_name":"Portfolio","start_url":"/","background_color":"#FFFFFF","theme_color":"#000000","display":"minimal-ui","icon":"./content/images/aritech2.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"15f5889ba92b012c58d4d579a7823f98"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-portfolio-minimal/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://simon-currie.com","skipContentDirectorySetup":true,"manifestSettings":{"favicon":"./content/images/aritech2.png","siteName":"Simon Currie","shortName":"Portfolio","startUrl":"/","backgroundColor":"#FFFFFF","themeColor":"#000000","display":"minimal-ui"},"contentDirectory":"./content","blogSettings":{"entityName":"Article","path":"/blog","usePathPrefixForArticles":true}},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
