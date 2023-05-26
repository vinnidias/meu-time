import { ILeagueResponseData } from "@/interfaces/ILeagueResponseData";
import { api } from "./api";

export const getLeagueByCountry = async (
  apiKey: string
): Promise<{
  data: ILeagueResponseData;
}> => {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  };
  const res = await api.get("/leagues", config);
  const data = res.data;

  return { data };
};
