import axios from "axios";
import { getAccessToken } from "./authConfig";
import { IPublicClientApplication } from "@azure/msal-browser";
import moment from "moment";

// API endpoint configuration
const USER_DETAILS_ENDPOINT = "https://adb2c-func-app.azurewebsites.net/user/detail";

/**
 * Fetches authenticated user data from the API
 * @param msalInstance - MSAL Public Client Application instance
 * @returns Promise containing user detail data
 * @throws Error if API request fails or authentication fails
 */
export const fetchUserData = async (msalInstance: IPublicClientApplication) => {
  try {
    const storedTokenExpiryTime = localStorage.getItem("expiresOn");
    const currentTimestamp = new Date();
    const hasTokenExpired = moment(currentTimestamp).isAfter(storedTokenExpiryTime);
    
    // Get valid authentication token
    const authToken = storedTokenExpiryTime === null || hasTokenExpired
      ? await getAccessToken(msalInstance)
      : localStorage.getItem("accessToken");

    // Make authenticated API request
    const apiResponse = await axios.get(USER_DETAILS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "content-type": "application/json",
      },
    });

    if (apiResponse.status !== 200) {
      throw new Error("User data fetch failed");
    }

    return apiResponse.data;
  } catch (error) {
    console.error("User data fetch error:", error);
    throw error;
  }
}; 