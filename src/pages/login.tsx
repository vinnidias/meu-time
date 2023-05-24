import { useContext, useState } from "react";

import { getCountries } from "@/services/getCountries";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const [apiKey, setApiKey] = useState("");

  const handleLogin = async () => {
    try {
      const { data, errors } = await getCountries(apiKey);
      if (!errors.token) {
        router.push("/");
        Cookies.set("api_key", apiKey);
        console.log("success", data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Insira aqui a sua chave da api"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button onClick={handleLogin}> Entrar </button>
    </>
  );
}
