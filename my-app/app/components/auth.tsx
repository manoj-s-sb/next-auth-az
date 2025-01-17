// components/AuthComponent.tsx
import React from "react";
import { useMsal } from "@azure/msal-react";
import { b2cPolicies } from "../utils/msalConfig";
import Dashboard from "../dashboard/page";

const AuthComponent = () => {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect({
      authority: b2cPolicies.signIn.authority,
      scopes: [
        "https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
      ],
    });
  };

  const handleLogout = () => {
    instance.logoutPopup();

    instance.clearCache();
  };

  return (
    <div>
      {!accounts.length ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          <p>Welcome, {accounts[0].username}</p>
          <button onClick={handleLogout}>Logout</button>
          <Dashboard/>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
