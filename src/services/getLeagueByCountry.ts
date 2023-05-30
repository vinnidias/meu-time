import { ILeagueResponseData } from "@/interfaces/ILeagueResponseData";
import { api } from "./api";

export const getLeagueByCountry = async (
  apiKey: string,
  country: string
): Promise<{
  data: ILeagueResponseData[];
  status: number;
  errors: { token?: string; requests?: string };
}> => {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  };
  const res = await api.get(`/leagues?country=${country}`, config);
  const data = res.data.response;
  const status = res.data.status;
  const errors = res.data.errors;

  return { data, status, errors };
};
