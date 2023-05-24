import React from "react";

export interface IAuthContextProps {
  apiKey: string;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
}
