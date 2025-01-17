// src/apiClient.ts
import axios from "axios";
import { getAccessToken } from "./authConfig";
import { IPublicClientApplication } from "@azure/msal-browser";
import moment from "moment";

export const fetchApiData = async (instance: IPublicClientApplication) => {
  try {
    const expire = localStorage.getItem("expiresOn");
    const currenttime = new Date();
    const validateExpireon = moment(currenttime).isAfter(expire);
    console.log(expire === null, "expire");
    let token;
    if (expire === null) {
      token = await getAccessToken(instance);
    } else {
      token = validateExpireon
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
    return await response.data;
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};
