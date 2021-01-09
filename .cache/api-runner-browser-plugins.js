module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-social9-socialshare/gatsby-browser.js'),
      options: {"plugins":[],"content":"073004d757df4a7ca401fc742b11a17a"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":1024,"showCaptions":true,"linkImagesToOriginal":false,"tracedSVG":true,"loading":"lazy","markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-XXXXXXXXX-X","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Vovo Chico Pimenta","short_name":"VovoChicoPimenta","start_url":"/","background_color":"#ffffff","theme_color":"#5C2A5B","display":"standalone","icon":"static/assets/stackrole.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"68254aee683f194820a12a1ea45fb8bb"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"XXX-XXXXXXX","includeInDevelopment":false,"defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}},"routeChangeEventName":"gatsby-route-change"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]