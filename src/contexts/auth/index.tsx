import { IAuthContextProps } from "@/interfaces/IAuthContextProps";
import { IAuthProvider } from "@/interfaces/IAuthProvider";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [apiKey, setApiKey] = useState("");

  return (
    <AuthContext.Provider
      value={{
        apiKey,
        setApiKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
