import {
  InteractionRequiredAuthError,
  IPublicClientApplication,
} from "@azure/msal-browser"; 
import { b2cPolicies } from "./msalConfig";

export const getAccessToken = async (instance: IPublicClientApplication) => {
  const accounts = instance.getAllAccounts();
  if (accounts.length === 0) throw new Error("No accounts found");
  try {
    const authResponse = await instance.handleRedirectPromise();
console.log(accounts,'aaccount')
    if (authResponse) {
      instance.setActiveAccount(authResponse.account);
    }
    const activeAccount = instance.getActiveAccount();
console.log(activeAccount,'activeAccount')

    if (!activeAccount) {
      console.log("No active account. Redirecting to sign-in.");
      return;
    }

    try {
      const response = await instance.acquireTokenSilent({
        scopes: [
          "https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
        ],
        account: accounts[0],
      });
      console.log("accessToken", response.accessToken)
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem(
        "expiresOn",
        response.expiresOn ? response.expiresOn.toString() : ""
      );
      return response.accessToken;
    } catch (error) {
      console.log(error);
      if (error instanceof InteractionRequiredAuthError) {
        console.error("Silent token acquisition failed, redirecting to login.");
        instance.loginRedirect({
          authority: b2cPolicies.signIn.authority,
          scopes: [
            "https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
          ],
        });
      } else {
        console.error("Unexpected error during token acquisition:", error);
      }
    }
  } catch (error) {
    console.error("Error handling redirect promise:", error);
  }
};
