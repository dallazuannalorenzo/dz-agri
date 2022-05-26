const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '53724bb4611e850b7f4c4f474c2e18f643d26ff07044e6d1fde05d6310242116',
  baseURL: 'https://dz-agri.herokuapp.com',
  clientID: 'd9OWhdfOOhNVidyrmLhDbsNl8ObfWiFK',
  issuerBaseURL: 'https://dev-ylukm6pm.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
