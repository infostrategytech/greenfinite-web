module.exports = {
    async redirects() {
      return [
        {
          source: '/webmail',
          destination: 'https://istrategytech.com/webmail',
          permanent: true,
          basePath: false,
        },
      ]
    },
  }