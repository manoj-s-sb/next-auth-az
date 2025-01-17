"use client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./utils/msalConfig";
import AuthComponent from "./components/auth";

export default function Home() {
  const msalInstance = new PublicClientApplication(msalConfig);
  msalInstance
    .initialize()
    .then(() => {
      console.log("MSAL initialized successfully");
    })
    .catch((error) => {
      console.error("MSAL initialization failed:", error);
    });
  return (
    <MsalProvider instance={msalInstance}>
      <AuthComponent />
    </MsalProvider>
  );
}
