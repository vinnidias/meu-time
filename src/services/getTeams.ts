import { ITeamData } from "@/interfaces/ITeamData";
import { api } from "./api";

export const getTeams = async (
  apiKey: string,
  leagueId: number,
  season: number
): Promise<{
  data: ITeamData[];
  status: number;
  errors: { token?: string; requests?: string };
}> => {
  const config = {
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": apiKey,
    },
  };
  const res = await api.get(
    `/teams?league=${leagueId}&season=${season}`,
    config
  );

  const data = res.data.response;
  const status = res.data.status;
  const errors = res.data.errors;

  return { data, status, errors };
};
