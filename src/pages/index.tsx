import { ICountriesProps } from "@/interfaces/ICountriesProps";
import { getCountries } from "@/services/getCountries";
import { InferGetServerSidePropsType } from "next";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { getLeagueByCountry } from "@/services/getLeagueByCountry";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<ICountriesProps[]>([]);
  const [countrySelected, setCountrySelected] = useState("");

  useEffect(() => {
    const apiKey = Cookies.get("api_key") || "";
    if (!apiKey) {
      router.push("login");
    }
    (async () => {
      const { data } = await getCountries(apiKey);
      console.log("paises", data);
      setData(data);
    })();
  }, [router]);

  useEffect(() => {
    const apiKey = Cookies.get("api_key") || "";
    if (!apiKey) {
      router.push("login");
    }
    getLeagueByCountry(apiKey, countrySelected);
  }, [countrySelected, router]);
  return (
    <>
      <h1>Meu time</h1>
      <span>{countrySelected}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          width: "300px",
          height: "600px",
          overflowY: "scroll",
          gap: "1em",
          padding: "1em",
        }}
      >
        {data.map((country, index) => (
          <button
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".3em",
              cursor: "pointer",
            }}
            onClick={() => setCountrySelected(country.name)}
          >
            {country.flag && (
              <Image
                src={country.flag}
                alt="bandeira do país"
                width={25}
                height={25}
              />
            )}
            <span>{country.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}
