import AuthLock0 from "auth0-lock";
require("dotenv").config();

const domain = process.env.REACT_APP_DOMAIN;
const clientID = process.env.REACT_APP_CLIENT_ID;

const lock = new AuthLock0(clientID, "domain", domain);

export default lock;
