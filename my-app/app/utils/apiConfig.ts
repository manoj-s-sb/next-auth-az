// src/apiClient.ts
import axios from "axios";
import { getAccessToken } from "./authConfig";
import { IPublicClientApplication } from "@azure/msal-browser";
import moment from "moment";

export const fetchApiData = async (instance: IPublicClientApplication) => {
  try {
    const tokenExpiresOn = localStorage.getItem("expiresOn");
    const current_time = new Date();
    const isTokenExpired = moment(current_time).isAfter(tokenExpiresOn);
    let token;
    if (tokenExpiresOn === null) {
      token = await getAccessToken(instance);
    } else {
      token = isTokenExpired
        ? await getAccessToken(instance)
        : localStorage.getItem("accessToken");
    }

    const response = await axios.get(
      "https://adb2c-func-app.azurewebsites.net/user/detail",
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
