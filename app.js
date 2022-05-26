/*const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('listening on port ${port}');
})*/

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'https://dz-agri.herokuapp.com/',
  clientID: 'YVrxuH82s9KjQq6LufA04c0lxmKNXeQD',
  issuerBaseURL: 'https://dev-ylukm6pm.us.auth0.com',
  secret: 'FWVSdgSDXefGqJCsIVM5LnSz8U5f4mUDZq3tyK0C0ropR0f2MbpoCAfvOu5BzlSZ'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});