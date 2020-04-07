import auth0 from "auth0-js";

// class that helps with Auth0 authentication functionality
//domain and clientID re both considered information that does not need to be kept secret.
//The client identifier is not a secret; it is exposed to the resource owner and MUST NOT be used alone for client authentication.
class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "workouttracker.auth0.com",
      audience: "https://workouttracker.auth0.com/userinfo",
      clientID: "GQ67toqqYZMdF52d3L4gxHH2Vg2M8MH6",
      redirectUri: "https://labspt7-workout-tracker.herokuapp.com/onboarding",
      responseType: "id_token",
      scope: "openid profile"
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  //invoking below
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
      returnTo: "https://labspt7-workout-tracker.herokuapp.com/",
      clientID: "GQ67toqqYZMdF52d3L4gxHH2Vg2M8MH6"
    });
  }
}

const auth0Client = new Auth();

export default auth0Client;
