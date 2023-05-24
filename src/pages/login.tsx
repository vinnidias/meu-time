import { useContext } from "react";
import { AuthContext } from "@/contexts/auth";
import { getCountries } from "@/services/getCountries";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { apiKey, setApiKey } = useContext(AuthContext);
  const handleLogin = async () => {
    const { data, errors } = await getCountries(apiKey);
    if(!errors.token){
      router.push('/');
    }
    console.log("login: ", data.data);
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
