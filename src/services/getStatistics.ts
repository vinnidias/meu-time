import { ITeamStats } from "@/interfaces/ITeamStats";
import { api } from "./api";

export const getStatistics = async (
  apiKey: string,
  leagueId: number,
  season: number,
  teamId: number
): Promise<{
  data: ITeamStats;
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
    `/teams/statistics?league=${leagueId}&season=${season}&team=${teamId}`,
    config
  );
  const data = res.data.response;
  const status = res.data.status;
  const errors = res.data.errors;

  return { data, status, errors };
};
