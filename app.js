const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '5e9eb80d79539383fc73eb7da30a606d8a46c4f8de761f56485052f421911abf',
  baseURL: 'https://dz-agri.herokuapp.com',
  clientID: 'jd9sKpFSn7cCMjZLtiWA7LDoHD8PF3rb',
  issuerBaseURL: 'https://dev-ylukm6pm.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
