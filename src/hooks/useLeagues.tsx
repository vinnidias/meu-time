import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { getLeagueByCountry } from "@/services/getLeagueByCountry";
import { ILeagueData } from "@/interfaces/ILeagueData";

export const useLeagues = () => {
  const router = useRouter();
  const [countrySelected, setCountrySelected] = useState("");
  const [leagueByCountry, setLeagueByCountry] = useState<ILeagueData[]>([]);
  const [leagueSelect, setLeagueSelect] = useState("");

  useEffect(() => {
    const apiKey = Cookies.get("api_key") || "";
    if (!apiKey) {
      router.push("/login");
    }
    (async () => {
      try {
        const { data } = await getLeagueByCountry(apiKey);
        const leagues = data.response;
        const leaguesByCountry = leagues.filter(
          (value) => value.country.name === countrySelected
        );
        setLeagueByCountry(leaguesByCountry);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [countrySelected, router]);

  return {
    countrySelected,
    setCountrySelected,
    leagueByCountry,
    leagueSelect,
    setLeagueSelect,
  };
};
