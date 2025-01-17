// components/AuthComponent.tsx
import React from "react";
import { useMsal } from "@azure/msal-react";
import { b2cPolicies, loginRequest } from "../utils/msalConfig";
import Dashboard from "../dashboard/page";

/**
 * AuthComponent handles user authentication using Microsoft Authentication Library (MSAL)
 * Manages login/logout functionality and renders appropriate UI based on authentication state
 */
const AuthComponent: React.FC = () => {
  const { instance, accounts } = useMsal();

  // Handle user login with redirect flow
  const handleLogin = async () => {
    try {
      await instance.loginRedirect({
        authority: b2cPolicies.signIn.authority,
        scopes: loginRequest.scopes,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Handle user logout and clean up
  const handleLogout = async () => {
    try {
      await instance.logoutPopup();
      // Clear local storage and cache
      ['accessToken', 'expiresOn'].forEach(key => localStorage.removeItem(key));
      instance.clearCache();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="p-4">
      {!accounts.length ? (
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      ) : (
        <div className="space-y-4">
          <p className="text-lg">Welcome, {accounts[0].username}</p>
          <button 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
