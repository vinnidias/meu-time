import { useState } from "react";

import { getCountries } from "@/services/getCountries";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import styles from "../styles/Login.module.css";

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
      } else window.alert("Chave de api inválida!");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1>
          Meu <span>Time</span>
        </h1>

        <section className={styles.description}>
          <p>Entre com a chave da Api-Football disponível no link abaixo. </p>
          <a href="https://dashboard.api-football.com/" target="_blank">
            Dashboard Api-Football
          </a>
        </section>
        <section className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Insira aqui a sua chave da api"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button onClick={handleLogin}> Entrar </button>
        </section>
      </div>
    </div>
  );
}
