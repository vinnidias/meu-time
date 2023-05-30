import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { getLeagueByCountry } from "@/services/getLeagueByCountry";
import { ILeagueData } from "@/interfaces/ILeagueData";
import { ISeasonData } from "@/interfaces/ISeasonData";

export const useLeagues = () => {
  const router = useRouter();
  const [countrySelected, setCountrySelected] = useState("");
  const [leagueByCountry, setLeagueByCountry] = useState<ILeagueData[]>([]);
  const [leagueSelect, setLeagueSelect] = useState("");
  const [seasons, setSeasons] = useState<ISeasonData[]>([]);
  const [selectedSeason, setSelectedSeason] = useState(0);

  useEffect(() => {
    const apiKey = Cookies.get("api_key") || "";
    if (!apiKey) {
      router.push("/login");
    }
    (async () => {
      try {
        const { data } = await getLeagueByCountry(apiKey, countrySelected);

        setLeagueByCountry(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [countrySelected, router]);

  useEffect(() => {
    const seasons = leagueByCountry.map((league) => league.seasons);
    const formatedSeasons = seasons[0];
    setSeasons(formatedSeasons);
  }, [leagueByCountry]);

  return {
    countrySelected,
    setCountrySelected,
    leagueByCountry,
    leagueSelect,
    setLeagueSelect,
    seasons,
    selectedSeason,
    setSelectedSeason,
  };
};
