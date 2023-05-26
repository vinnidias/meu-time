import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Cookies from "js-cookie";
import { ICountriesProps } from "@/interfaces/ICountriesProps";
import { getCountries } from "@/services/getCountries";

export const useCountries = () => {
  const router = useRouter();
  const [countries, setCountries] = useState<ICountriesProps[]>([]);

  useEffect(() => {
    const apiKey = Cookies.get("api_key") || "";
    if (!apiKey) {
      router.push("/login");
    }
    (async () => {
      const { data, errors } = await getCountries(apiKey);
      if (errors.requests) {
        window.alert(`A Api retornou o seguinte erro: ${errors.requests}`);
        Cookies.remove("api_key");
        router.push("/login");
      }
      console.log("paises", data);
      setCountries(data);
    })();
  }, [router]);

  return {
    countries,
  };
};
