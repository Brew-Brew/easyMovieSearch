const withImages = require('next-images')

module.exports = withImages({
    webpack: (config, { dev }) => {
      // Perform customizations to config
      
      // Important: return the modified config
      return config
    }
  })