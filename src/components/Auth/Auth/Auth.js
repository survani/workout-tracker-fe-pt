import auth0 from "auth0";
require("dotenv").config(); // imports .env file

const domain = process.env.REACT_APP_DOMAIN;
const clientID = process.env.REACT_APP_CLIENT_ID;
// class that helps with Auth0 authentication functionality
class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: domain,
      audience: "http://workouttracker.auth0.com/userinfo",
      clientID: clientID,
      redirectUri: "http://localhost:3000/callback",
      responseType: "id_token",
      scope: "openid profile"
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  //returns profile of authenticated user
  getProfile() {
    return this.profile;
  }
  // returns the idtoken created by Auth0
  getIdToken() {
    return this.idToken;
  }
  // returns whether there is an authenticated user or not.
  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }
  //sends user to Auth0 login page
  signIn() {
    this.auth0.authorize();
  }
  //method that will call right after the user is redirected from Auth0
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    });
  }

  signOut() {
    // clear id token, profile, and expiration
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
    this.auth0.logout({
      returnTo: "http://localhost:3000",
      clientID: clientID
    });
  }
}

const auth0Client = new Auth();

export default auth0Client;
