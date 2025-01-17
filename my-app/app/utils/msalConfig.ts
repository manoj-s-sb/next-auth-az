import { LogLevel, PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "d710cec4-128a-47c2-8cbe-7c37852eccaa",
    authority:
      "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SIgnUp",
    knownAuthorities: ["stancebeamcctest.b2clogin.com"],
    redirectUri: "http://localhost:3000/",
    postLogoutRedirectUri: "http://localhost:3000/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },

  system: {
    loggerOptions: {
      loggerCallback: (level:LogLevel, message:string, containsPii:boolean) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

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

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
    scopes: [
        "https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
      ],
  };