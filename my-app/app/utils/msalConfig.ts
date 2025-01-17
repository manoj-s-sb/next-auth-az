import { LogLevel, PublicClientApplication } from "@azure/msal-browser";

export const b2cPolicies = {
  signUp: {
    authority:
      "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SignUp",
  },
  signIn: {
    authority:
      "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SignIn",
  },
  editProfile: {
    authority:
      "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_Profile_Edit",
  },
  resetPassword: {
    authority:
      "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_Password_Reset",
  },
};

export const msalConfig = {
  auth: {
    clientId: "d710cec4-128a-47c2-8cbe-7c37852eccaa",
    authority:
      "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SIgnUp",
    knownAuthorities: ["stancebeamcctest.b2clogin.com"],
    //redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },

  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string) => {
        if (process.env.NODE_ENV !== "production") {
          console.log(message);
        }
      },
      logLevel: LogLevel.Error,
    },
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
  scopes: [
    "https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
  ],
};

