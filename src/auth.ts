import { OktaAuth } from "@okta/okta-auth-js";

const auth = new OktaAuth({
  issuer: "https://dev-91697643.okta.com/oauth2/default",
  clientId: "0oa50wnykkAFczLjb5d7",
  redirectUri: "http://localhost:8080/login/callback",
});


