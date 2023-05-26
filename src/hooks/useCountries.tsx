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
      router.push("login");
    }
    (async () => {
      const { data } = await getCountries(apiKey);
      console.log("paises", data);
      setCountries(data);
    })();
  }, [router]);

  return{
    countries
  }
};
