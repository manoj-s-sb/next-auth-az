// src/apiClient.ts
import axios from "axios";
import { getAccessToken } from "./authConfig";
import { IPublicClientApplication } from "@azure/msal-browser";

export const fetchApiData = async (instance: IPublicClientApplication) => {
  try {
    const token = await getAccessToken(instance);
    console.log("Token:", token);
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
