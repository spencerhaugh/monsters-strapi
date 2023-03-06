module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'alex-makes-monsters.up.railway.app'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'alex-makes-monsters.up.railway.app'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '10mb',
    }
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
