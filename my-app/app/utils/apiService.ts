// src/apiClient.ts
import axios from "axios";
import { getAccessToken } from "./authConfig";
import { IPublicClientApplication } from "@azure/msal-browser";
import moment from "moment";

export const fetchApiData = async (instance: IPublicClientApplication) => {
  try {
    const tokenExpirationTime = localStorage.getItem("expiresOn");
    const currentTime = new Date();
    const isTokenExpired = moment(currentTime).isAfter(tokenExpirationTime);
    let authToken;

    if (tokenExpirationTime === null) {
      authToken = await getAccessToken(instance);
    } else {
      authToken = isTokenExpired
        ? await getAccessToken(instance)
        : localStorage.getItem("accessToken");
    }

    const response = await axios.get(
      "https://adb2c-func-app.azurewebsites.net/user/detail",
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "content-type": "application/json",
        },
      }
    );
    if (response.status !== 200) throw new Error("API request failed");
    return response.data;
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};
