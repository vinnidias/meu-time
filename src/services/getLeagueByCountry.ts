import { api } from "./api";

export const getLeagueByCountry = async (apiKey: string, code: string) => {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  };
  const res = await api.get("/leagues", config);
  const leagues: any[] = res.data.response;

  const legueByCountry = leagues.filter((value) => value.country.name === code);
  console.log(legueByCountry);
  return { data: legueByCountry };
};
