module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e15d17dfe146bd1666cfaa0751d136ab'),
  },
});
